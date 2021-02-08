import { GameCardProps } from 'components/GameCard';

import { Container } from './styles';

export interface GamesTemplatesProps {
  games?: GameCardProps[];
}

const GamesTemplate = ({ games }: GamesTemplatesProps) => {
  return (
    <Container>
      <h1>Games</h1>
    </Container>
  );
};

export default GamesTemplate;
