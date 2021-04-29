import { Story, Meta } from '@storybook/react/types-6-0';

import CardList from '../components/CartList';
import items from '../components/CartList/mock';

export default {
  title: 'components/CardList',
  component: CardList,

  argTypes: {
    cartContextValue: {
      type: '',
    },
    items: {
      type: '',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '800' }}>
    <CardList {...args} />
  </div>
);

Basic.args = {
  total: 'R$ 330,00',
  cartContextValue: { items },
};

export const WithButton: Story = args => (
  <div style={{ maxWidth: '800' }}>
    <CardList hasButton {...args} />
  </div>
);

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { items },
};

export const Empty: Story = args => (
  <div style={{ maxWidth: '800' }}>
    <CardList />
  </div>
);
