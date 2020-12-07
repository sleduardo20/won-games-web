import {
  Container,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
} from './styles';

export interface GameItemProps {
  img: string;
  title: string;
  price: string;
}

const GameItem = ({ img, price, title }: GameItemProps) => {
  return (
    <Container>
      <GameContent>
        <ImageBox>
          <img src={img} alt={title} />
        </ImageBox>
        <Content>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Content>
      </GameContent>
    </Container>
  );
};

export default GameItem;
