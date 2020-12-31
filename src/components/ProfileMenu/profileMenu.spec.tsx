import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

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
});
