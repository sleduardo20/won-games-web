import { PaymentIntent } from '@stripe/stripe-js';
import { CartItem } from 'hooks/useCart';
import { api } from 'services/api';

type PaymentsIntentParams = {
  items: CartItem[];
  token: string;
};

export const createPaymentIntent = async ({
  items,
  token,
}: PaymentsIntentParams) => {
  api.defaults.headers.authorization = `Bearer ${token}`;

  const { data } = await api.post('orders/create-payment-intent', {
    cart: items,
  });

  return data;
};

type CreatePaymentParams = {
  items: CartItem[];
  paymentIntent?: PaymentIntent;
  token: string;
};

export const createPayment = async ({
  items,
  paymentIntent,
  token,
}: CreatePaymentParams) => {
  // api.defaults.headers.authorization = `Bearer ${token}`;

  const { data } = await api.post(
    'orders',
    {
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method,
    },
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );

  return { data };
};
