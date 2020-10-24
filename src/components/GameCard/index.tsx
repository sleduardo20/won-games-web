import {
  AddShoppingCart,
  FavoriteBorder,
} from 'styled-icons/material-outlined';

import {
  Container,
  Content,
  ImageBox,
  Info,
  Title,
  Developer,
  FavButton,
  BuyBox,
  Price,
} from './styles';

import Button from '../Button';

export interface GameCardProps {
  title: string;
  developer: string;
  img: string;
  price: string;
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => {
  return (
    <Container>
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
      <Content>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>
        <FavButton role="button">
          <FavoriteBorder aria-label="Add to Wishlist" />
        </FavButton>
        <BuyBox>
          <Price>{price}</Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </BuyBox>
      </Content>
    </Container>
  );
};

export default GameCard;
