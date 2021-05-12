import '../../../.jest/session.mock';
import '../../../.jest/macth-media-mock.js';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';
import { wishListContextDefaulValues } from 'hooks/useWishList';
import { screen, render } from '../../utils/test-utils';

import Wishtlist, { WishListTemplateProps } from '.';

const props: WishListTemplateProps = {
  recommendedGames: mockGames,
  recommendedTitle: 'You may like these games',
  recommendedHighLight: mockHightLight,
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/ShowCase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ShowCase" />;
  },
}));

describe('<Wishtlist />', () => {
  it('should be able render Wishlist', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      items: [mockGames[0]],
    };

    render(<Wishtlist {...props} />, { wishlistProviderProps });

    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/RocketGames/i)).toBeInTheDocument();
  });

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      items: [],
    };
    render(
      <Wishtlist
        recommendedGames={props.recommendedGames}
        recommendedTitle={props.recommendedTitle}
        recommendedHighLight={props.recommendedHighLight}
      />,
      { wishlistProviderProps },
    );

    expect(screen.queryByText(/rocketgames/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
