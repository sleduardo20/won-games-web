import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { initializeApollo } from 'utils/apollo';
import { QUERY_GAMES } from 'graphql/queries/games';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

import GamesTemplate, { GamesTemplatesProps } from 'templates/Games';

import {
  genresFields,
  platformFields,
  priceFields,
  sortFields,
} from 'utils/filter/fields';
import { parseQueryStringToWhere } from '../utils/filter/index';

export default function GamesPage(props: GamesTemplatesProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields,
  };

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields,
  };

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields,
  };

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genresFields,
  };

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories,
  ];

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems,
    },
  };
};
