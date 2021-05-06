import userEvent from '@testing-library/user-event';
import { screen, render } from '../../utils/test-utils';

import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should be able render the username', () => {
    render(<UserDropdown username="Eduardo Lima" />);

    expect(screen.getByText(/eduardo lima/i)).toBeInTheDocument();
  });

  it('should be able render the menu', () => {
    render(<UserDropdown username="Eduardo Lima" />);

    // open menu
    userEvent.click(screen.getByText(/eduardo lima/i));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign out/i }),
    ).toBeInTheDocument();
  });
});
