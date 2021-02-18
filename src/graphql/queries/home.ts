import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/banner';
import { GameFragment } from 'graphql/fragments/game';

// GET_HOME / QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-02-17" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcamingGames: games(
      where: { release_date_gt: "2021-01-31" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
      ...GameFragment
      short_description
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
