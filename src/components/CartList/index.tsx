import Link from 'next/link';

import { useCart } from '../../hooks/useCart';
import Button from '../Button';
import GameItem from '../GameItem';
import Empty from '../Empty';

import { Container, Footer, Total } from './styles';

export interface CartListProps {
  hasButton?: boolean;
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart();
  return (
    <Container isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map(item => (
            <GameItem key={item.title} {...item} />
          ))}

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
