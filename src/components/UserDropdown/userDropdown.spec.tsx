import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should be able render the username', () => {
    renderWithTheme(<UserDropdown username="Eduardo Lima" />);

    expect(screen.getByText(/eduardo lima/i)).toBeInTheDocument();
  });

  it('should be able render the menu', () => {
    renderWithTheme(<UserDropdown username="Eduardo Lima" />);

    // open menu
    userEvent.click(screen.getByText(/eduardo lima/i));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
