import mockBanners from 'components/BannerSlider/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';
import { GetServerSideProps } from 'next';

import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      banners: mockBanners,
      newGames: mockGames,
      mostPopularHighlight: mockHightLight,
      mostPopularGames: mockGames,
      upcomingGames: mockGames,
      upcomingHighlight: mockHightLight,
      freeGames: mockGames,
      freeHighlight: mockHightLight,
    },
  };
};
