import { ShoppingCart } from '@styled-icons/material-outlined';

import { Container } from './styles';

const CartIcon = () => {
  return (
    <Container>
      <ShoppingCart aria-label="Shopping Cart" />
    </Container>
  );
};

export default CartIcon;
