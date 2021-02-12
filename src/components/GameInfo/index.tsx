import {
  AddShoppingCart,
  FavoriteBorder,
} from 'styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';
import Ribbon from '../Ribbon';

import { Container, Description, WrapperButton } from './styles';

export interface GameInfoProps {
  title: string;
  description: string;
  price: number;
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <Container>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">
        {`$${new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD',
        }).format(price)}`}
      </Ribbon>

      <Description>{description}</Description>

      <WrapperButton>
        <Button icon={<AddShoppingCart />} size="large" minimal>
          Add to Card
        </Button>

        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </WrapperButton>
    </Container>
  );
};

export default GameInfo;
