import { Story, Meta } from '@storybook/react/types-6-0';

import OrdersList, { OrdersListProps } from '../components/OrdersList';

import itemsMock from '../components/OrdersList/mock';

export default {
  title: 'components/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock,
  },
} as Meta;

export const Basic: Story<OrdersListProps> = args => (
  <div style={{ maxWidth: '850px', margin: '0 auto' }}>
    <OrdersList {...args} />
  </div>
);
