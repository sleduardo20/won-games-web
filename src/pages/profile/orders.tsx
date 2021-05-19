import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import protectedRoutes from 'utils/protected-routes';

import { initializeApollo } from 'utils/apollo';
import {
  QueryOrders,
  QueryOrdersVariables,
} from 'graphql/generated/QueryOrders';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import { QUERY_ORDERS } from 'graphql/queries/orders';
import { ordersMapper } from 'utils/mappers';
import Profile from '../../templates/Profile';

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
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: `${session?.id}`,
    },
  });

  return {
    props: {
      items: ordersMapper(data.orders),
      session,
    },
  };
};
