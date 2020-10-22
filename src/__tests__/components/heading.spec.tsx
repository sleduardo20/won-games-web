import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Heading from '../../components/Heading';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with a line to the side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.5rem solid #3cd3c1',
    });
  });

  it('should render a heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #f231a5',
      {
        modifier: '::after',
      },
    );
  });
});
