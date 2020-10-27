import mockBanners from 'components/BannerSlider/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: mockBanners,
      newGames: mockGames,
      mostPopularHighlight: mockHightLight,
      mostPopularGames: mockGames,
      upcommingGames: mockGames,
      upcommingHighlight: mockHightLight,
      freeGames: mockGames,
      freeHighlight: mockHightLight,
    },
  };
}
