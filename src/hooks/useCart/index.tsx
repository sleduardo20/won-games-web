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
  quantity: number;
  total: string;
}

const CartContext = createContext({
  items: [],
  quantity: 0,
  total: '$0.00',
} as CartContextData);

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

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
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
