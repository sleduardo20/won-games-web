import Link from 'next/link';
import Image from 'next/image';

import WishlistButton from '../WishlistButton';
import { CartButton } from '../CartButton';

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
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: GameCardProps) => {
  return (
    <Container data-cy="game-card">
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </ImageBox>
      </Link>
      <Content>
        <Link href={`game/${slug}`} passHref>
          <Info>
            <Title>{title}</Title>
            <Developer>{developer}</Developer>
          </Info>
        </Link>
        <FavButton>
          <WishlistButton id={id} />
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
