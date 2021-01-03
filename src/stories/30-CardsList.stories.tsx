import { Meta, Story } from '@storybook/react/types-6-0';

import CardsList, { CardsListProps } from '../components/CardsList';

import cardsMock from '../components/PaymentOptions/mock';

export default {
  title: 'components/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Basic: Story<CardsListProps> = args => (
  <div style={{ maxWidth: '850px', margin: '0 auto' }}>
    <CardsList {...args} />
  </div>
);
