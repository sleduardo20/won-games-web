import { Session } from 'next-auth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
  session: Session;
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
  recommendedTitle: string;
}

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const Cart = ({
  session,
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

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
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
