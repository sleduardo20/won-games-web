import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import OrdersList, { OrdersListProps } from 'components/OrdersList';

import protectedRoutes from 'utils/protected-routes';
import Profile from '../../templates/Profile';

import itemsMock from '../../components/OrdersList/mock';

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  return {
    props: {
      items: itemsMock,
      session,
    },
  };
};
