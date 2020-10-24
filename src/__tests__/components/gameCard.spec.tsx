import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '../../components/GameCard';

const props = {
  title: 'Title Example',
  developer: 'Developer Example',
  img: '/img/example.png',
  price: '250',
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

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument();
  });
});
