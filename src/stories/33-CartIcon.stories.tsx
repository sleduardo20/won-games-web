import { Story, Meta } from '@storybook/react/types-6-0';

import CartIcon from '../components/CartIcon';

export default {
  title: 'components/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => <CartIcon {...args} />;
