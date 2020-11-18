import { Windows, Apple, Linux } from '@styled-icons/fa-brands';

import MediaMath from '../MediaMath';
import Heading from '../Heading';

import {
  Container,
  Content,
  Block,
  Description,
  Label,
  WrapperIcons,
  Icon,
} from './styles';

type Platform = 'windows' | 'linux' | 'mac';

export interface GameDetailsProps {
  platforms: Platform[];
}

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Windows" size={18} />,
    linux: <Linux title="Windows" size={18} />,
  };
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
            <WrapperIcons>
              {platforms.map((icon: Platform) => (
                <Icon key={icon}>{platformIcons[icon]}</Icon>
              ))}
            </WrapperIcons>
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
