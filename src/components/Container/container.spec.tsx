import { Container } from 'components/Container';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Container />', () => {
  it('should be able the render Container component correctly', () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `);
  });
});
