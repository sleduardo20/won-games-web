import { ShoppingCart } from '@styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';

import { Container, Body, Footer } from './styles';

const PaymentForm = () => {
  return (
    <Container>
      <Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
      </Body>
      <Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy Now
        </Button>
      </Footer>
    </Container>
  );
};

export default PaymentForm;
