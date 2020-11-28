import GameInfo, { GameInfoProps } from 'components/GameInfo';

import Gallery, { GalleryImageProps } from 'components/Gallery';
import Base from '../Base';

import { Main, Cover, SectionGameInfo, SectionGallery } from './styles';

export interface GameTemplateProps {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => {
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
      </Main>
    </Base>
  );
};

export default Game;
