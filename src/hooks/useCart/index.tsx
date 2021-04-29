import { createContext, useContext, useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from '../../utils/localStorage';
import { cartMapper } from '../../utils/mappers';
import { formatPrice } from '../../utils/formatPrice';
import { useQueryGames } from '../../graphql/queries/games';

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

export const defaultValuesCartContext = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
} as CartContextData;

export const CartContext = createContext<CartContextData>(
  defaultValuesCartContext,
);

export interface CartProviderProps {
  children: React.ReactNode;
}

const CART_KEY = 'cartItems';

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

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
    setStorageItem(CART_KEY, cartItems);
  };

  const addToCart = (id: string) => {
    saveCart([...cartItems, id]);
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
