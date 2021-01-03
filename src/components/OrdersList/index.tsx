import Empty from 'components/Empty';
import GameItem, { GameItemProps } from 'components/GameItem';
import Heading from '../Heading';

import { Container } from './styles';

export interface OrdersListProps {
  items?: GameItemProps[];
}

const OrdersList = ({ items = [] }: OrdersListProps) => {
  return (
    <Container>
      <Heading lineBottom lineColor="primary" color="black" size="small">
        My Orders
      </Heading>
      {items.length ? (
        items.map(item => <GameItem key={item.downlowdLink} {...item} />)
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
