import { Story, Meta } from '@storybook/react/types-6-0';

import items from '../components/CartList/mock';

import CartDropdown from '../components/CartDropdown';

export default {
  title: 'components/CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
);

Basic.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 300,00',
  },
};

export const Empty: Story = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
);
