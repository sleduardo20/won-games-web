import Base from 'templates/Base';

import { Container } from 'components/Container';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import { Grid } from 'components/Grid';

export interface WishListTemplateProps {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
  games?: GameCardProps[];
}

const WishList = ({
  recommendedGames,
  recommendedHighLight,
  games,
}: WishListTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      </Container>
      <ShowCase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};

export default WishList;
