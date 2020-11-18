import MediaMath from '../MediaMath';
import Heading from '../Heading';
import { Container, Content, Block, Description, Label } from './styles';

const GameDetails = () => {
  return (
    <Container>
      <MediaMath greaterThan="small">
        <Heading color="white" lineBottom lineColor="secondary">
          Game Details
        </Heading>

        <Content>
          <Block>
            <Label>Developer</Label>
            <Description>Gearbox Software</Description>
          </Block>

          <Block>
            <Label>Release Date</Label>
            <Description>Nov 18, 2020</Description>
          </Block>

          <Block>
            <Label>Platforms</Label>
          </Block>

          <Block>
            <Label>Publisher</Label>
            <Description>2k</Description>
          </Block>

          <Block>
            <Label>Rating</Label>
            <Description>18+</Description>
          </Block>

          <Block>
            <Label>Genres</Label>
            <Description>Action / Adventure</Description>
          </Block>
        </Content>
      </MediaMath>
    </Container>
  );
};

export default GameDetails;
