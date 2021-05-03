import { GetServerSideProps } from 'next';

import OrdersList, { OrdersListProps } from 'components/OrdersList';

import Profile from '../../templates/Profile';

import itemsMock from '../../components/OrdersList/mock';

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      items: itemsMock,
    },
  };
};
