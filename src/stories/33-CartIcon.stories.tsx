import { Story, Meta } from '@storybook/react/types-6-0';

import CartIcon, { CartIconProps } from '../components/CartIcon';

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

export const WithBadge: Story<CartIconProps> = args => (
  <CartIcon quantity={3} {...args} />
);
