import CartList, { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import PaymentForm from 'components/PaymentForm';
import ShowCase from 'components/ShowCase';

import Base from 'templates/Base';

import { Content } from './styles';

export interface CartProps extends CartListProps {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
  recommendedTitle: string;
}

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighLight,
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        <Content>
          <CartList />

          <PaymentForm />
        </Content>

        <Divider />
      </Container>

      <ShowCase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};

export default Cart;
