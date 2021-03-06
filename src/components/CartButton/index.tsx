import {
  AddShoppingCart,
  RemoveShoppingCart,
} from '@styled-icons/material-outlined';

import Button, { ButtonProps } from '../Button';
import { useCart } from '../../hooks/useCart';

interface CartButtonProps extends Pick<ButtonProps, 'size'> {
  id: string;
  hasText?: boolean;
}

export const CartButton = ({ id, size, hasText }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();

  const textButton = isInCart(id) ? 'Remove from cart' : 'Add to cart';

  return (
    <Button
      aria-label={textButton}
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && textButton}
    </Button>
  );
};
