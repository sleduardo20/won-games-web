import { useQueryGames } from 'graphql/queries/games';
import { createContext, useContext, useEffect, useState } from 'react';
import { formatPrice } from 'utils/formatPrice';
import { getStorageItem } from 'utils/localStorage';
import { cartMapper } from 'utils/mappers';

interface CartItem {
  id: string;
  img: string;
  title: string;
  price: string;
}

export interface CartContextData {
  items: CartItem[];
}

const CartContext = createContext({} as CartContextData);

export interface CartProviderProps {
  children: React.ReactNode;
}

const cartKey = 'cartItems';

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(cartKey);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
