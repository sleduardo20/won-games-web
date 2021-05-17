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
