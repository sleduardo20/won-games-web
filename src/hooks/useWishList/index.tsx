import { GameCardProps } from 'components/GameCard';
import { createContext, useContext } from 'react';

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
  const isInWishList = (id: string) => false;
  const addToWishList = (id: string) => {};
  const removeFromWishList = (id: string) => {};

  return (
    <WishListContext.Provider
      value={{ addToWishList, isInWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };
