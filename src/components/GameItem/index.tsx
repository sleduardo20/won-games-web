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
} from './styles';

export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export interface GameItemProps {
  img: string;
  title: string;
  price: string;
  downlowdLink?: string;
  paymentInfo?: PaymentInfoProps;
}

const GameItem = ({
  img,
  price,
  title,
  downlowdLink,
  paymentInfo,
}: GameItemProps) => {
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
          <Price>{price}</Price>
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
