import { Story, Meta } from '@storybook/react/types-6-0';

import items from '../components/CartList/mock';

import CartDropdown, { CartDropdownProps } from '../components/CartDropdown';

export default {
  title: 'components/CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 330,00',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<CartDropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);

export const Empty: Story<CartDropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
);
