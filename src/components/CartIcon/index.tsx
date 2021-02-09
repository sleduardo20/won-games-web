import { ShoppingCart } from '@styled-icons/material-outlined';

import { Container, Badge } from './styles';

export interface CartIconProps {
  quantity?: number;
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => {
  return (
    <Container>
      {!!quantity && <Badge aria-label="cart items">12</Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </Container>
  );
};

export default CartIcon;
