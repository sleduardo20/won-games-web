import GameInfo, { GameInfoProps } from 'components/GameInfo';

import Gallery, { GalleryImageProps } from 'components/Gallery';
import TextContent from 'components/TextContent';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
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
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighLightProps;
  recommendedGames: GameCardProps[];
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames,
}: GameTemplateProps) => {
  return (
    <Base>
      <Cover src={cover} role="image" aria-label="cover" />
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
        </SectionGameDetails>

        <ShowCase
          title="Upcomming"
          games={upcommingGames}
          highlight={upcommingHighlight}
        />

        <ShowCase title="You may like these games" games={recommendedGames} />
      </Main>
    </Base>
  );
};

export default Game;
