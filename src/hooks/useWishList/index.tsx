import { useSession } from 'next-auth/client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMutation } from '@apollo/client';

import { QueryWishList_wishlists_games } from '../../graphql/generated/QueryWishList';
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
} from '../../graphql/mutations/wishlist';
import { useQueryWishList } from '../../graphql/queries/wishlist';

import { GameCardProps } from '../../components/GameCard';
import { gamesMapper } from '../../utils/mappers';

export type WishListContextData = {
  items: GameCardProps[];
  isInWishList: (id: string) => boolean;
  addToWishList: (id: string) => void;
  removeFromWishList: (id: string) => void;
  loading: boolean;
};

export const wishListContextDefaulValues = {
  items: [],
  isInWishList: () => false,
  addToWishList: () => null,
  removeFromWishList: () => null,
  loading: false,
};

export const WishListContext = createContext<WishListContextData>(
  wishListContextDefaulValues,
);

export type WishListProviderProps = {
  children: React.ReactNode;
};
const WishListProvider = ({ children }: WishListProviderProps) => {
  const [session] = useSession();

  const [wishListId, setWishListId] = useState<string | null>();
  const [wishListItems, setWishListItems] = useState<
    QueryWishList_wishlists_games[]
  >([]);

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: data => {
        setWishListItems(data?.createWishlist?.wishlist?.games || []);
        setWishListId(data?.createWishlist?.wishlist?.id);
      },
    },
  );

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: data => {
        setWishListItems(data?.updateWishlist?.wishlist?.games || []);
      },
    },
  );

  const { data, loading: loadingQuery } = useQueryWishList({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });

  useEffect(() => {
    setWishListItems(data?.wishlists[0]?.games || []);
    setWishListId(data?.wishlists[0]?.id);
  }, [data]);

  const wishlistIds = useMemo(
    () => wishListItems.map(game => game.id),
    [wishListItems],
  );

  const isInWishList = (id: string) =>
    !!wishListItems.find(game => game.id === id);

  const addToWishList = (id: string) => {
    if (!wishListId) {
      return createList({
        variables: { input: { data: { games: [...wishlistIds, id] } } },
      });
    }

    return updateList({
      variables: {
        input: {
          where: { id: wishListId },
          data: { games: [...wishlistIds, id] },
        },
      },
    });
  };

  const removeFromWishList = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishListId },
          data: {
            games: wishlistIds.filter((gameId: string) => gameId !== id),
          },
        },
      },
    });
  };

  return (
    <WishListContext.Provider
      value={{
        items: gamesMapper(wishListItems),
        addToWishList,
        isInWishList,
        removeFromWishList,
        loading: loadingQuery || loadingCreate || loadingUpdate,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
