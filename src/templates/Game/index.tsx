import GameInfo, { GameInfoProps } from 'components/GameInfo';
import { Main, Cover, SectionGameInfo } from './styles';
import Base from '../Base';

export interface GameTemplateProps {
  cover: string;
  gameInfo: GameInfoProps;
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => {
  return (
    <Base>
      <Cover src={cover} role="image" aria-label="cover" />
      <Main>
        <SectionGameInfo>
          <GameInfo {...gameInfo} />
        </SectionGameInfo>
      </Main>
    </Base>
  );
};

export default Game;
