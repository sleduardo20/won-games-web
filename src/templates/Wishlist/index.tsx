import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import Heading from 'components/Heading';
import { HighLightProps } from 'components/HighLight';
import ShowCase from 'components/ShowCase';
import Base from 'templates/Base';

export interface WishListTemplateProps {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighLightProps;
}

const WishList = ({
  recommendedGames,
  recommendedHighLight,
}: WishListTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          Wishlist
        </Heading>
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
