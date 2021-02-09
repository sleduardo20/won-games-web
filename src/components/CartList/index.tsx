import Link from 'next/link';

import Button from '../Button';
import GameItem, { GameItemProps } from '../GameItem';
import Empty from '../Empty';

import { Container, Footer, Total } from './styles';

export interface CartListProps {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => {
  return (
    <Container>
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
          title="your cart is empty"
          description="Go back to the store explore great games and offers."
        />
      )}
    </Container>
  );
};

export default CartList;
