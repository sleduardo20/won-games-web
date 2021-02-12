import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'my game title',
  description: 'my description',
  price: 210,
};

describe('<GameInfo/>', () => {
  it('should be able render GameInfo component correctly', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /my game title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/my description/i)).toBeInTheDocument();

    expect(screen.getByText(/\$210.00/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render buttons GameInfo', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to card/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });
});
