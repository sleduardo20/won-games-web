import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormProfile from '.';

describe('<FormProfile/>', () => {
  it('should be able render the profile form correctly', () => {
    renderWithTheme(<FormProfile />);

    expect(
      screen.getByRole('heading', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
  });
});
