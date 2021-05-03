import { useCart } from 'hooks/useCart';
import { Download } from 'styled-icons/boxicons-solid';
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
  flag: string;
  img: string;
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
          <img src={img} alt={title} />
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
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </CardInfo>
        </PaymentContent>
      )}
    </Container>
  );
};

export default GameItem;
