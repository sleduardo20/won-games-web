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

  it('should render a black label is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a normal logo', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });
});
