import Link from 'next/link';

import { Loader } from '../Loader';
import { useCart } from '../../hooks/useCart';
import Button from '../Button';
import GameItem from '../GameItem';
import Empty from '../Empty';

import { Container, Footer, Total, Loading, GamesList } from './styles';

export interface CartListProps {
  hasButton?: boolean;
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart();

  if (loading) {
    return (
      <Loading>
        <Loader aria-label="loading" />
      </Loading>
    );
  }

  return (
    <Container isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <GamesList>
            {items.map(item => (
              <GameItem key={item.title} {...item} />
            ))}
          </GamesList>

          <Footer>
            {!hasButton && <span>Total:</span>}
            <Total>{total}</Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </Footer>
        </>
      ) : (
        <Empty
          hasLink
          title="your cart is empty"
          description="Go back to the store explore great games and offers."
        />
      )}
    </Container>
  );
};

export default CartList;
