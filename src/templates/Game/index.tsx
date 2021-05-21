import { NextSeo } from 'next-seo';

import GameInfo, { GameInfoProps } from 'components/GameInfo';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import TextContent from 'components/TextContent';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import { Divider } from 'components/Divider';
import Image from 'next/image';
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
  slug: string;
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighLightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
}: GameTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title={`${gameInfo.title} - Won Games`}
        description={gameInfo.description}
        canonical={`https://wongames.sleduardo.dev/game/${slug}`}
        openGraph={{
          url: `https://wongames.sleduardo.dev/game/${slug}`,
          title: `${gameInfo.title} - Won Games`,
          description: gameInfo.description,
          images: [
            {
              url: cover,
              alt: `${gameInfo.title}`,
            },
          ],
        }}
      />
      <Cover aria-label="cover">
        <Image
          src={cover}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </Cover>
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
          title={upcomingTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <ShowCase title={recommendedTitle} games={recommendedGames} />
      </Main>
    </Base>
  );
};

export default Game;
