import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { initializeApollo } from 'utils/apollo';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import {
  QueryGameBySlug,
  QueryGameBySlugVariables,
} from 'graphql/generated/QueryGameBySlug';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper } from 'utils/mappers';
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
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  // get recommeded games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  const game = data.games[0];

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: game.price,
      },
      gallery: game.gallery.map(image => ({
        src: `http://localhost:1337${image.src}`,
        label: `http://localhost:1337${image.label}`,
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
      upcomingGames: mockGames,
      upcomingHighlight: mockHightLight,
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games),
    },
  };
};
