import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '../../../components/Logo';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should rende a black label is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });
});
