import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import HighLight from '../../components/HighLight';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'buy now',
  buttonLink: '/go',
  backgroundImage: '/img/teste.png',
};

describe('<HighLight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<HighLight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /heading 2/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<HighLight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });
});
