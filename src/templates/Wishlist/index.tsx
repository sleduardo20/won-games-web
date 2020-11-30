import { Container } from 'components/Container';
import Heading from 'components/Heading';
import Base from 'templates/Base';

const WishList = () => {
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Wishlist
        </Heading>
      </Container>
    </Base>
  );
};

export default WishList;
