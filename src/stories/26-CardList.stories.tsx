import { Story, Meta } from '@storybook/react/types-6-0';

import CardList, { CartListProps } from '../components/CartList';
import mockCardList from '../components/CartList/mock';

export default {
  title: 'components/CardList',
  component: CardList,
  args: {
    items: mockCardList,
    total: 'R$ 330,00',
  },
  argTypes: {
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

export const Basic: Story<CartListProps> = args => (
  <div style={{ maxWidth: '800' }}>
    <CardList {...args} />
  </div>
);
