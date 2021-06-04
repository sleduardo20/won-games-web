/* eslint-disable no-nested-ternary */
import Base from 'templates/Base';

import { Container } from 'components/Container';
import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import GameCard, { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import Empty from 'components/Empty';
import { Loader } from 'components/Loader';

import { useWishList } from 'hooks/useWishList';

export interface WishListTemplateProps {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
}

const WishList = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighLight,
}: WishListTemplateProps) => {
  const { items, loading } = useWishList();

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading color="white" lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <Loader />
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
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
