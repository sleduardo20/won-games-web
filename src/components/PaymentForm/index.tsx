import { useEffect, useState } from 'react';
import { Session } from 'next-auth';

import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import { useCart } from 'hooks/useCart';
import { createPaymentIntent } from 'utils/stripe/methods';
import Button from '../Button';
import Heading from '../Heading';

import { Container, Body, Footer, Error, FreeGames } from './styles';

type PaymentFormProps = {
  session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [freeGames, setFreeGames] = useState(false);

  const { items } = useCart();

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        setFreeGames(false);

        const data = await createPaymentIntent({
          items,
          token: `${session.jwt}`,
        });

        if (data.freeGames) {
          setFreeGames(true);
        }

        if (data.error) {
          setError(data.error);
        }

        setClientSecret(data.client_secret);
      }
    }

    setPaymentMode();
  }, [items, session]);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setError(event.error ? event.error.message : '');
    setDisabled(event.empty);
  };
  return (
    <Container>
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
          fullWidth
          icon={<ShoppingCart />}
          disabled={!freeGames && (disabled || !!error)}
        >
          Buy Now
        </Button>
      </Footer>
    </Container>
  );
};

export default PaymentForm;
