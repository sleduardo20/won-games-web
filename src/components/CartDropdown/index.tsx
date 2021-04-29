import CartIcon from '../CartIcon';
import CartList from '../CartList';
import Dropdown from '../Dropdown';

import { Container } from './styles';

const CartDropdown = () => {
  return (
    <Container>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </Container>
  );
};

export default CartDropdown;
