import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { useRouter } from 'next/router';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { createPayment, createPaymentIntent } from 'utils/stripe/methods';

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import { useCart } from 'hooks/useCart';
import { FormLoading } from 'components/FormForgotPassword/styles';
import Button from '../Button';
import Heading from '../Heading';

import { Container, Body, Footer, Error, FreeGames } from './styles';

type PaymentFormProps = {
  session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [freeGames, setFreeGames] = useState(false);

  const { push } = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const { items } = useCart();

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        setFreeGames(false);

        // buscar da api /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: `${session.jwt}`,
        });
        // fluxo de jogos free
        if (data.freeGames) {
          setFreeGames(true);
        }

        if (data.error) {
          setError(data.error);
        }
        // payment intent for válido registrar o client secret
        setClientSecret(data.client_secret);
      }
    }

    setPaymentMode();
  }, [items, session]);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '');
    setDisabled(event.empty);
  };

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: `${session.jwt}`,
    });

    return data;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (freeGames) {
      push('/success');

      // salvar as orders de jogos free
      saveOrder();
      return;
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setLoading(false);
    } else {
      setError(null);
      setLoading(false);

      // salvar as orders de jogos pagos
      saveOrder(payload.paymentIntent);

      push('/success');
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <FreeGames>Only free games, click buy and enjoy!</FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: '16px' } },
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <Error>
              <ErrorOutline size={16} style={{ marginRight: 4 }} /> {error}
            </Error>
          )}
        </Body>
        <Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            type="submit"
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy Now</span>}
          </Button>
        </Footer>
      </form>
    </Container>
  );
};

export default PaymentForm;
