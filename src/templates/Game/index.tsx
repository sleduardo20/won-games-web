import GameInfo, { GameInfoProps } from 'components/GameInfo';

import Gallery, { GalleryImageProps } from 'components/Gallery';
import TextContent from 'components/TextContent';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import { Divider } from 'components/Divider';
import Base from '../Base';

import {
  Main,
  Cover,
  SectionGameInfo,
  SectionGallery,
  SectionDescription,
  SectionGameDetails,
} from './styles';

export interface GameTemplateProps {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighLightProps;
  recommendedGames: GameCardProps[];
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => {
  return (
    <Base>
      <Cover src={cover} role="img" aria-label="cover" />
      <Main>
        <SectionGameInfo>
          <GameInfo {...gameInfo} />
        </SectionGameInfo>

        <SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </SectionGallery>

        <SectionDescription>
          <TextContent title="Description" content={description} />
        </SectionDescription>

        <SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </SectionGameDetails>

        <ShowCase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <ShowCase title="You may like these games" games={recommendedGames} />
      </Main>
    </Base>
  );
};

export default Game;
