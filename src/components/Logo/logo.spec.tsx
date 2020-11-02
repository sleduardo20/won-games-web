import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from 'components/Logo';

describe('<Logo />', () => {
  it('should de render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should be render a black label is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able render wiht id is passed', () => {
    const { container } = renderWithTheme(<Logo id="id-test" />);

    expect(
      container.querySelector('#paint0_linear_id-test'),
    ).toBeInTheDocument();
  });

  it('should be render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should be rendered a normal logo', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should be render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });
});
