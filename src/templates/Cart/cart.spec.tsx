import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import gamesMock from '../../components/GameCardSlider/mock';
import hightLightMock from '../../components/HighLight/mock';
import itemsMock from '../../components/CardList/mock';
import cardsMock from '../../components/PaymentOptions/mock';

import Cart from '.';

const props = {
  items: itemsMock,
  total: 'R$430,00',
  cards: cardsMock,
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

jest.mock('components/CardList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Card" />;
  },
}));

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
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
    renderWithTheme(<Cart {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId(/Mock ShowCase/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Mock Card/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Mock PaymentOptions/i)).toBeInTheDocument();
  });

  it('should be able render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />);

    expect(screen.getByTestId(/Mock Empty/i)).toBeInTheDocument();
  });
});
