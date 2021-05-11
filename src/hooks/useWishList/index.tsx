import { GameCardProps } from 'components/GameCard';
import { QueryWishList_wishlists_games } from 'graphql/generated/QueryWishList';
import { useQueryWishList } from 'graphql/queries/wishlist';
import { useSession } from 'next-auth/client';
import { createContext, useContext, useEffect, useState } from 'react';
import { gamesMapper } from 'utils/mappers';

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

  const [wishListItems, setWishListItems] = useState<
    QueryWishList_wishlists_games[]
  >([]);

  const isInWishList = (id: string) => false;
  const addToWishList = (id: string) => {};
  const removeFromWishList = (id: string) => {};

  const { data, loading } = useQueryWishList({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });

  useEffect(() => {
    setWishListItems(data?.wishlists[0].games || []);
  }, [data]);

  return (
    <WishListContext.Provider
      value={{
        items: gamesMapper(wishListItems),
        addToWishList,
        isInWishList,
        removeFromWishList,
        loading,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
