import { Windows, Apple, Linux } from '@styled-icons/fa-brands';

import Heading from '../Heading';
import MediaMath from '../MediaMath';

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
type Rating = 'FREE' | 'BR10' | 'BR14' | 'BR16' | 'BR18';

export interface GameDetailsProps {
  platforms: Platform[];
  developer: string;
  releaseDate: string;
  rating: Rating;
  genres: string[];
}

const GameDetails = ({
  platforms,
  developer,
  releaseDate,
  rating,
  genres,
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    linux: <Linux title="Linux" size={18} />,
  };
  return (
    <Container>
      <MediaMath greaterThan="small">
        <Heading color="white" lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMath>
      <Content>
        <Block>
          <Label>Developer</Label>
          <Description>{developer}</Description>
        </Block>

        <Block>
          <Label>Release Date</Label>
          <Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </Description>
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
          <Description>
            {rating === 'FREE' ? 'FREE' : `${rating.replace('FREE', '')}+`}
          </Description>
        </Block>

        <Block>
          <Label>Genres</Label>
          <Description>{genres.join(' / ')}</Description>
        </Block>
      </Content>
    </Container>
  );
};

export default GameDetails;
