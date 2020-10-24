import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import HighLight from '../../components/HighLight';
import { Content } from '../../components/HighLight/styles';

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

  it('should render background image', () => {
    renderWithTheme(<HighLight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    );
  });

  it('should render align righ by default', () => {
    const { container } = renderWithTheme(
      <HighLight {...props} floatImage="/float-image.png" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${Content}`,
    });
  });

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <HighLight {...props} floatImage="/float-image.png" alignment="left" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${Content}`,
    });
  });
});
