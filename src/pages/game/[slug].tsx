import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { initializeApollo } from 'utils/apollo';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import {
  QueryGameBySlug,
  QueryGameBySlugVariables,
} from 'graphql/generated/QueryGameBySlug';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';

import {
  QueryUpcoming,
  QueryUpcomingVariables,
} from 'graphql/generated/QueryUpcoming';
import { QUERY_UPCOMING } from 'graphql/queries/upcoming';

import { gamesMapper, highLightMapper } from 'utils/mappers';
import { getImageUrl } from 'utils/getImageUrl';
import Game, { GameTemplateProps } from '../../templates/Game';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  // se a rota não tiver sido gerado poder gerar um componente de loading...
  if (router.isFallback) return null;

  return <Game {...props} />;
}

// gerar as rotas em tempo de build
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
};

// gerar os dados de forma estática
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache', // garantiri sempre dado novo na geração do estático
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  const game = data.games[0];

  // get recommeded games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  // get upcoming games
  const today = new Date().toISOString().slice(0, 10);
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: today },
  });

  return {
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        description: game.short_description,
        price: game.price,
      },
      gallery: game.gallery.map(image => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label,
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(platform => platform.name),
        publisher: game.publisher,
        rating: game.rating,
        genres: game.categories.map(category => category.name),
      },

      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highLightMapper(
        upcoming.showcase?.upcomingGames?.highlight,
      ),

      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games),
    },
    revalidate: 60,
  };
};
