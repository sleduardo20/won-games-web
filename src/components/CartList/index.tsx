import GameItem, { GameItemProps } from '../GameItem';
import { Container, Footer, Total } from './styles';

export interface CartListProps {
  items: GameItemProps[];
  total: string;
}

const CartList = ({ items, total }: CartListProps) => {
  return (
    <Container>
      {items.map(item => (
        <GameItem key={item.title} {...item} />
      ))}

      <Footer>
        Total <Total>{total}</Total>
      </Footer>
    </Container>
  );
};

export default CartList;
