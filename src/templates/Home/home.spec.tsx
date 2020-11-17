import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';

import Home from 'templates/Home';
import { renderWithTheme } from 'utils/tests/helpers';

import mockBanners from 'components/BannerSlider/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

const props = {
  banners: mockBanners,
  newGames: [mockGames[0]],
  mostPopularHighlight: mockHightLight,
  mostPopularGames: [mockGames[0]],
  upcommingGames: [mockGames[0]],
  upcommingHighlight: mockHightLight,
  freeGames: [mockGames[0]],
  freeHighlight: mockHightLight,
};

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu" />;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer" />;
    },
  };
});

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
  it('should be able render page Home, menu and footer successfull', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
  });

  it('should be able render page Home the sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(6);
  });

  it('should be able render section elements', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument();
  });
});
