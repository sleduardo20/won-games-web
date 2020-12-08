import { Download } from 'styled-icons/boxicons-solid';
import {
  Container,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
  DownloadLink,
} from './styles';

export interface GameItemProps {
  img: string;
  title: string;
  price: string;
  downlowdLink?: string;
}

const GameItem = ({ img, price, title, downlowdLink }: GameItemProps) => {
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
    </Container>
  );
};

export default GameItem;
