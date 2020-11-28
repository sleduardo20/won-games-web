import { Cover } from './styles';
import Base from '../Base';

export interface GameTemplateProps {
  cover: string;
}

const Game = ({ cover }: GameTemplateProps) => {
  return (
    <Base>
      <Cover src={cover} role="image" aria-label="cover" />
    </Base>
  );
};

export default Game;
