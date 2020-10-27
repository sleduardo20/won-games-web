import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';

import Home from 'templates/Home';
import { renderWithTheme } from 'utils/tests/helpers';

import mockBanners from 'components/BannerSlider/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

const props = {
  banners: mockBanners,
  newGames: mockGames,
  mostPopularHighlight: mockHightLight,
  mostPopularGames: mockGames,
  upcommingGames: mockGames,
  upcommingHighlight: mockHightLight,
  freeGames: mockGames,
  freeHighlight: mockHightLight,
};

describe('<Home />', () => {
  it('should be able render page Home, menu and footer successfull', () => {
    renderWithTheme(<Home {...props} />);

    const columnContact = screen.getByRole('heading', { name: /contact/i });
    expect(columnContact).toBeInTheDocument();

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it('should be able render page Home the sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Most Popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Upcomming/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Free Games/i }),
    ).toBeInTheDocument();
  });
});
