import { useQueryGames } from 'graphql/queries/games';
import { createContext, useContext, useEffect, useState } from 'react';
import { formatPrice } from 'utils/formatPrice';
import { getStorageItem, setStorageItem } from 'utils/localStorage';
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
  isInCart: (id: string) => boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  loading: boolean;
}

const CartContext = createContext({
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
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

  const { data, loading } = useQueryGames({
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

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false);

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems);
    setStorageItem(cartKey, cartItems);
  };

  const addToCart = (id: string) => {
    const newCartItems = [...cartItems, id];
    saveCart(newCartItems);
  };

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item: string) => item !== id);
    saveCart(newCartItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
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
