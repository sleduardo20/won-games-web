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
  promotinalPrice?: string;
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotinalPrice,
}: GameCardProps) => {
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
          {!!promotinalPrice && <Price isPromotional>{price}</Price>}
          <Price>{promotinalPrice || price}</Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </BuyBox>
      </Content>
    </Container>
  );
};

export default GameCard;
