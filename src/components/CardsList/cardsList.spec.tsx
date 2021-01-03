import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CardsList from '.';

import cardsMock from '../PaymentOptions/mock';

describe('<CardList/>', () => {
  it('should be able render the card list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />);

    expect(
      screen.getByRole('heading', { name: /My cards/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png',
    );

    expect(screen.getByText(/5955/)).toBeInTheDocument();
    expect(screen.getByText(/4745/)).toBeInTheDocument();
  });
});
