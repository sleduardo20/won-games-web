import { useMemo } from 'react';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: concatPagination(),
          },
        },
      },
    }),
  });
};

export const initializeApollo = (initialState = null) => {
  // serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
};

export const useApollo = (initialState = null) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
