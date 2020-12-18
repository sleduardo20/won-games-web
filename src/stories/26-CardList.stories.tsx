import { Story, Meta } from '@storybook/react/types-6-0';

import CardList, { CardListProps } from '../components/CardList';

export default {
  title: 'CardList',
  component: CardList,
} as Meta;

export const Basic: Story<CardListProps> = args => <CardList {...args} />;
