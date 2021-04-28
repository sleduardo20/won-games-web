import { ShoppingCart } from '@styled-icons/material-outlined';
import { useCart } from 'hooks/useCart';

import { Container, Badge } from './styles';

const CartIcon = () => {
  const { quantity } = useCart();
  return (
    <Container>
      {quantity > 0 && <Badge aria-label="cart items">{quantity}</Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </Container>
  );
};

export default CartIcon;
