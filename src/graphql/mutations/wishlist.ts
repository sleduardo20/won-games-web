import { gql } from '@apollo/client';
import { GameFragment } from 'graphql/fragments/game';

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishList($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        user {
          id
          username
        }
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`;

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishList($input: updateWishlistInput!) {
    updateWishlist(input: $input) {
      wishlist {
        id
        user {
          id
          username
        }
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`;
