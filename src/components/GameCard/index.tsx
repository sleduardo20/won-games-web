import Link from 'next/link';

import { Favorite, FavoriteBorder } from 'styled-icons/material-outlined';

import { CartButton } from 'components/CartButton';

import { formatPrice } from '../../utils/formatPrice';

import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';

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
  id: string;
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotinalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
}

const GameCard = ({
  id,
  slug,
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
      <Link href={`game/${slug}`} passHref>
        <ImageBox>
          <img src={img} alt={title} />
        </ImageBox>
      </Link>
      <Content>
        <Link href={`game/${slug}`} passHref>
          <Info>
            <Title>{title}</Title>
            <Developer>{developer}</Developer>
          </Info>
        </Link>
        <FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </FavButton>
        <BuyBox>
          {!!promotinalPrice && (
            <Price isPromotional>{formatPrice(price)}</Price>
          )}
          <Price>{formatPrice(promotinalPrice || price)}</Price>
          <CartButton id={id} />
        </BuyBox>
      </Content>
    </Container>
  );
};

export default GameCard;
