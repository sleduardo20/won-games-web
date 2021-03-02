import CartList, { CartListProps } from 'components/CartList';
import { Container } from 'components/Container';
import { Divider } from 'components/Divider';
import Empty from 'components/Empty';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';
import ShowCase from 'components/ShowCase';
import { useCallback } from 'react';
import Base from 'templates/Base';

import { Content } from './styles';

export interface CartProps
  extends CartListProps,
    Pick<PaymentOptionsProps, 'cards'> {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
  recommendedTitle: string;
}

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighLight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = useCallback(() => {
    return {};
  }, []);
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items?.length ? (
          <Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}
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
