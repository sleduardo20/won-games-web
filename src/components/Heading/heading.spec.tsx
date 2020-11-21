import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from 'components/Heading';

describe('<Heading />', () => {
  it('should be render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should be render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be render a heading with a line to the side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #f231a5',
    });
  });

  it('should be render a heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #f231a5',
      {
        modifier: '::after',
      },
    );
  });

  it('should be render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after',
      },
    );
  });

  it('should be render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem',
    });
  });

  it('should be render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #f231a5' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after',
    });
  });

  it('should be render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3cd3c1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3cd3c1', {
      modifier: '::after',
    });
  });
});