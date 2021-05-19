import Empty from '../Empty';
import GameItem, { GameItemProps, PaymentInfoProps } from '../GameItem';
import Heading from '../Heading';

import { Container } from './styles';

type OrderProps = {
  id: string;
  paymentInfo: PaymentInfoProps;
  games: GameItemProps[];
};

export interface OrdersListProps {
  items?: OrderProps[];
}

const OrdersList = ({ items = [] }: OrdersListProps) => {
  return (
    <Container>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My Orders
      </Heading>
      {items.length ? (
        items.map(order => {
          return order.games.map(game => (
            <GameItem
              key={order.id}
              paymentInfo={order.paymentInfo}
              {...game}
            />
          ));
        })
      ) : (
        <Empty
          title="You have no order yet"
          description="Go back to the store and explore great games and offerts"
          hasLink
        />
      )}
    </Container>
  );
};

export default OrdersList;
