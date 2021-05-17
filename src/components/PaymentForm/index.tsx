import { useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';

import { Container, Body, Footer, Error } from './styles';

const PaymentForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);

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
        <CardElement
          options={{
            hidePostalCode: true,
            style: { base: { fontSize: '16px' } },
          }}
          onChange={handleChange}
        />
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
          disabled={disabled || !!error}
        >
          Buy Now
        </Button>
      </Footer>
    </Container>
  );
};

export default PaymentForm;
