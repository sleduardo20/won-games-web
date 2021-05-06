import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import WishList, { WishListTemplateProps } from 'templates/Wishlist';

import mockGames from 'components/GameCardSlider/mock';

import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';

import { gamesMapper, highLightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

export default function WishlistPage(props: WishListTemplateProps) {
  return <WishList {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      games: mockGames,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighLight: highLightMapper(
        data.recommended?.section?.highlight,
      ),
      session,
    },
  };
};
