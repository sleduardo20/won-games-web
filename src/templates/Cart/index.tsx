import CarList, { CardListProps } from 'components/CardList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import Base from 'templates/Base';

import { Content } from './styles';

export interface CartProps extends CardListProps {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
}

const Cart = ({
  recommendedGames,
  recommendedHighLight,
  items,
  total,
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <Content>
          <CarList items={items} total={total} />
        </Content>
        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};

export default Cart;
