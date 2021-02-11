import { GetServerSideProps } from 'next';

import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

import GamesTemplate, { GamesTemplatesProps } from 'templates/Games';

import filterItemsMock from '../components/ExploreSideBar/mock';

export default function GamesPage(props: GamesTemplatesProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<GamesTemplatesProps> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map(game => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(game.price),
      })),
      filterItems: filterItemsMock,
    },
  };
};
