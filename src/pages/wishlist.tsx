import { GetStaticProps } from 'next';
import WishList, { WishListTemplateProps } from 'templates/Wishlist';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

export default function WishlistPage(props: WishListTemplateProps) {
  return <WishList {...props} />;
}

export const getStaticProps: GetStaticProps<WishListTemplateProps> = async () => {
  return {
    props: {
      recommendedGames: mockGames.slice(0, 5),
      recommendedHighLight: mockHightLight,
      games: mockGames,
    },
  };
};
