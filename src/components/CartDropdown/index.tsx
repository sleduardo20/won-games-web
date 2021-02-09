import CartIcon from '../CartIcon';
import CartList from '../CartList';
import Dropdown from '../Dropdown';
import { GameItemProps } from '../GameItem';

import { Container } from './styles';

export interface CartDropdownProps {
  items: GameItemProps[];
  total: string;
}

const CartDropdown = ({ items, total }: CartDropdownProps) => {
  return (
    <Container>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CartList items={items} total={total} hasButton />
      </Dropdown>
    </Container>
  );
};

export default CartDropdown;
