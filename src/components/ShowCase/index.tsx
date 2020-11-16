import HighLight, { HighLightProps } from '../HighLight';
import Heading, { HeadingProps } from '../Heading';
import GameCardSlider from '../GameCardSlider';
import { GameCardProps } from '../GameCard';
import { Wrapper } from './styles';

interface ShowCaseProps {
  title?: string;
  highlight?: HighLightProps;
  games?: GameCardProps[];
}

const ShowCase = ({ title, highlight, games }: ShowCaseProps) => {
  return (
    <Wrapper>
      {!!title && <Heading>{title}</Heading>}
      {!!highlight && <HighLight {...highlight} />}
      {!!games && <GameCardSlider items={games} />}
    </Wrapper>
  );
};

export default ShowCase;
