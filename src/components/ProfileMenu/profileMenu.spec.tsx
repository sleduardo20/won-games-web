import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from '../../styles/theme';

import ProfileMenu from '.';

describe('<ProfileMenu/>', () => {
  it('should be able render menu correctly', () => {
    const { container } = renderWithTheme(<ProfileMenu />);

    expect(
      screen.getByRole('link', { name: /My profile/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /My cards/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /My orders/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Sign Out/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByRole('link', { name: /My cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white,
    });
  });
});
