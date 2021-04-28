import '../../../.jest/macth-media-mock.js';

import Home, { HomeTemplateProps } from 'templates/Home';

import mockBanners from 'components/BannerSlider/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import { screen, render } from '../../utils/test-utils';

const props: HomeTemplateProps = {
  banners: mockBanners,
  mostPopularGamesTitle: 'popular games',
  upcomingGamesTitle: 'up coming games',
  newGamesTitle: 'new games',
  freeGamesTitle: 'free games',
  newGames: [mockGames[0]],
  mostPopularHighlight: mockHightLight,
  mostPopularGames: [mockGames[0]],
  upcomingGames: [mockGames[0]],
  upcomingHighlight: mockHightLight,
  freeGames: [mockGames[0]],
  freeHighlight: mockHightLight,
};

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase" />;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider" />;
    },
  };
});

describe('<Home />', () => {
  it('should be able render page Home the sections', () => {
    render(<Home {...props} />);

    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(4);
  });

  it('should be able render section elements', () => {
    render(<Home {...props} />);

    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument();
  });
});
