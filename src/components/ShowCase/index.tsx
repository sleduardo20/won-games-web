import HighLight, { HighLightProps } from '../HighLight';
import Heading, { HeadingProps } from '../Heading';
import GameCardSlider from '../GameCardSlider';
import { GameCardProps } from '../GameCard';
import { Wrapper } from './styles';

interface ShowCaseProps {
  title?: string;
  highlight?: HighLightProps;
  games?: GameCardProps[];
  color?: 'white' | 'black';
}

const ShowCase = ({
  title,
  highlight,
  games,
  color = 'white',
}: ShowCaseProps) => {
  return (
    <Wrapper data-cy={title || 'showcase'}>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <HighLight {...highlight} />}
      {!!games && <GameCardSlider items={games} />}
    </Wrapper>
  );
};

export default ShowCase;
