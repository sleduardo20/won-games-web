import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { initializeApollo } from 'utils/apollo';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';

import { gamesMapper, highLightMapper } from 'utils/mappers';

import protectedRoutes from 'utils/protected-routes';
import Cart, { CartProps } from '../templates/Cart';

import itemsMock from '../components/CartList/mock';
import cardsMock from '../components/PaymentOptions/mock';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighLight: highLightMapper(
        data.recommended?.section?.highlight,
      ),
      cards: cardsMock,
      items: itemsMock,
      total: 'R$ 430,00',
    },
  };
};
