import Base from 'templates/Base';

import { Container } from 'components/Container';
import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import Empty from 'components/Empty';

export interface WishListTemplateProps {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
  games?: GameCardProps[];
}

const WishList = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighLight,
  games = [],
}: WishListTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games?.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};

export default WishList;
