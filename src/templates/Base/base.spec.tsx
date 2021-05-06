import { screen, render } from '../../utils/test-utils';

import Base from '.';

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }];
  }),
}));

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

describe('<Base/>', () => {
  it('should be able render Menu, Footer and childre the Base component correctly', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>,
    );

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i }),
    ).toBeInTheDocument();
  });
});
