import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '../../components/Button';

describe('<Button />', () => {
  it('should render the medium size by default ', () => {
    renderWithTheme(<Button>Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
  });

  it('should render the small size by default ', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size by default ', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });
});
