import GameItem, { GameItemProps } from '../GameItem';
import { Container, Footer, Total } from './styles';

export interface CardListProps {
  items: GameItemProps[];
  total: string;
}

const CardList = ({ items, total }: CardListProps) => {
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

export default CardList;
