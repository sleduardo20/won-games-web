import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import Wishtlist, { WishListTemplateProps } from '.';

const props: WishListTemplateProps = {
  recommendedGames: mockGames,
  recommendedHighLight: mockHightLight,
  games: mockGames,
};

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />;
  },
}));

describe('<Wishtlist />', () => {
  it('should be able render Wishlist', () => {
    renderWithTheme(<Wishtlist {...props} />);

    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/RocketGames/i)).toHaveLength(6);
  });
});
