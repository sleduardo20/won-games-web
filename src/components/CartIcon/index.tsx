import { ShoppingCart } from '@styled-icons/material-outlined';

import { Container, Badge } from './styles';

const CartIcon = () => {
  return (
    <Container>
      <Badge aria-label="cart items">12</Badge>
      <ShoppingCart aria-label="Shopping Cart" />
    </Container>
  );
};

export default CartIcon;
