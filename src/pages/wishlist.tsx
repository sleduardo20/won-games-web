import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from 'utils/apollo';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import {
  QueryWishList,
  QueryWishListVariables,
} from 'graphql/generated/QueryWishList';
import { QUERY_WISHLIST } from 'graphql/queries/wishlist';

import { gamesMapper, highLightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

import mockGames from 'components/GameCardSlider/mock';

import WishList, { WishListTemplateProps } from 'templates/Wishlist';

export default function WishlistPage(props: WishListTemplateProps) {
  return <WishList {...props} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  if (!session) {
    return { props: {} };
  }

  await apolloClient.query<QueryWishList, QueryWishListVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string,
    },
  });

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      initialApolloState: apolloClient.cache.extract(),
      games: mockGames,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighLight: highLightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
};
