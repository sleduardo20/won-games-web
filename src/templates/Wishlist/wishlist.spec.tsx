import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import Wishtlist, { WishListTemplateProps } from '.';

const props: WishListTemplateProps = {
  recommendedGames: mockGames,
  recommendedTitle: 'You may like these games',
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

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishtlist
        recommendedGames={props.recommendedGames}
        recommendedTitle={props.recommendedTitle}
        recommendedHighLight={props.recommendedHighLight}
      />,
    );

    expect(screen.queryByText(/rocketgames/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
