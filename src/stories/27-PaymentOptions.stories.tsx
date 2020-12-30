import { Story, Meta } from '@storybook/react/types-6-0';

import PaymentOptions, {
  PaymentOptionsProps,
} from '../components/PaymentOptions';
import mockPaymentOptions from '../components/PaymentOptions/mock';

export default {
  title: 'components/PaymentOptions',
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    cards: {
      type: '',
    },
    handlePayment: {
      action: 'clicked',
    },
  },
  args: {
    cards: mockPaymentOptions,
  },
} as Meta;

export const Basic: Story<PaymentOptionsProps> = args => (
  <div style={{ maxWidth: '400', padding: 16 }}>
    <PaymentOptions {...args} />
  </div>
);
