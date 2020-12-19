import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOptions, {
  PaymentOptionsProps,
} from '../components/PaymentOptions';
import mockPaymentOptions from '../components/PaymentOptions/mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockPaymentOptions,
  },
} as Meta;

export const Basic: Story<PaymentOptionsProps> = args => (
  <PaymentOptions {...args} />
);
