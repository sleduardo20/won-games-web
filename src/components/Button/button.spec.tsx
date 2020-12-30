import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { AddShoppingCart } from 'styled-icons/material-outlined';

import Button from 'components/Button';

describe('<Button />', () => {
  it('should be render the medium size by default ', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be render the small size ', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should be render the large size ', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should be render the fullWidth versin ', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>);

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should be render an icon version ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>,
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should be render a minimal version ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy Now
      </Button>,
    );

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#f231a5',
    });

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover',
      },
    );
  });

  it('should be render button as a link', () => {
    const { container, debug } = renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>,
    );

    debug(container);

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });

  it('should be able a disabled button', () => {
    renderWithTheme(<Button disabled>Buy Now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      },
    );
  });
});
