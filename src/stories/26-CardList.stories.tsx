import { Story, Meta } from '@storybook/react/types-6-0';

import CardList, { CardListProps } from '../components/CardList';
import mockCardList from '../components/CardList/mock';

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

export const Basic: Story<CardListProps> = args => (
  <div style={{ maxWidth: '800' }}>
    <CardList {...args} />
  </div>
);
