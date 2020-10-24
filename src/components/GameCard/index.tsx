import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from 'styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import Button from '../Button';

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

export interface GameCardProps {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotinalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotinalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: GameCardProps) => {
  return (
    <Container>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>
      <Content>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>
        <FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
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
