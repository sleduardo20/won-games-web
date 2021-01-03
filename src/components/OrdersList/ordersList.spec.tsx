import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import OrdersList from '.';

import itemsMock from './mock';

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>;
  },
}));

describe('<OrdersList/>', () => {
  it('should be able render the game items correctly', () => {
    renderWithTheme(<OrdersList items={itemsMock} />);

    expect(
      screen.getByRole('heading', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
  });

  it('should be able render empty state', () => {
    renderWithTheme(<OrdersList />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
