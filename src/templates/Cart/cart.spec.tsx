import { screen, render } from '../../utils/test-utils';

import gamesMock from '../../components/GameCardSlider/mock';
import hightLightMock from '../../components/HighLight/mock';

import Cart from '.';

const props = {
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock,
  recommendedHighLight: hightLightMock,
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

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Card" />;
  },
}));

jest.mock('components/PaymentForm', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentForm" />;
  },
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));
describe('<Cart/>', () => {
  it('should be able render sections correctly', () => {
    render(<Cart {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId(/Mock ShowCase/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Mock Card/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Mock PaymentForm/i)).toBeInTheDocument();
  });
});
