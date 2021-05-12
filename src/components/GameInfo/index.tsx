import { FavoriteBorder } from 'styled-icons/material-outlined';

import WishlistButton from 'components/WishlistButton';
import { formatPrice } from '../../utils/formatPrice';

import { CartButton } from '../CartButton';
import Button from '../Button';
import Heading from '../Heading';
import Ribbon from '../Ribbon';

import { Container, Description, WrapperButton } from './styles';

export interface GameInfoProps {
  id: string;
  title: string;
  description: string;
  price: number;
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => {
  return (
    <Container>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

      <Description>{description}</Description>

      <WrapperButton>
        <CartButton id={id} size="large" hasText />
        <WishlistButton id={id} hasText size="large" />
      </WrapperButton>
    </Container>
  );
};

export default GameInfo;
