import Image from 'next/image';
import { Download } from 'styled-icons/boxicons-solid';
import { useCart } from '../../hooks/useCart';

import {
  Container,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
  DownloadLink,
  PaymentContent,
  CardInfo,
  Group,
  Remove,
} from './styles';

export type PaymentInfoProps = {
  number: string;
  flag: string | null;
  img: string | null;
  purchaseDate: string;
};

export interface GameItemProps {
  id: string;
  img: string;
  title: string;
  price: string;
  downlowdLink?: string;
  paymentInfo?: PaymentInfoProps;
}

const GameItem = ({
  id,
  img,
  price,
  title,
  downlowdLink,
  paymentInfo,
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart();

  return (
    <Container>
      <GameContent>
        <ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </ImageBox>
        <Content>
          <Title>
            {title}

            {!!downlowdLink && (
              <DownloadLink
                href={downlowdLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={20} />
              </DownloadLink>
            )}
          </Title>
          <Group>
            <Price>{price}</Price>

            {isInCart(id) && (
              <Remove onClick={() => removeFromCart(id)}>Remove</Remove>
            )}
          </Group>
        </Content>
      </GameContent>
      {!!paymentInfo && (
        <PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <img src={paymentInfo.img} alt={paymentInfo.flag} />
            )}
          </CardInfo>
        </PaymentContent>
      )}
    </Container>
  );
};

export default GameItem;
