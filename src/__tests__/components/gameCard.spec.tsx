import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '../../components/GameCard';

const props = {
  title: 'Title Example',
  developer: 'Developer Example',
  img: '/img/example.png',
  price: 'R$ 250',
  // promotinalPrice: 'R$ 200',
};

describe('<GameCard />', () => {
  it('should render corretly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText(props.price);

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });

  it('should render line-through in price when promocional', () => {
    renderWithTheme(<GameCard promotinalPrice="R$ 200" {...props} />);

    const price = screen.getByText(props.price);

    expect(price).toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(screen.getByText('R$ 200')).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).not.toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });
});
