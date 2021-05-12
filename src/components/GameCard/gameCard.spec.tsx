import '../../../.jest/session.mock';
import GameCard from 'components/GameCard';
import { screen, render, fireEvent } from '../../utils/test-utils';

const props = {
  id: '1',
  slug: 'cyberpunk-2077',
  title: 'Title Example',
  developer: 'Developer Example',
  img: '/img/example.png',
  price: 250,
};

describe('<GameCard />', () => {
  it('should be render GameCard component correctly', () => {
    render(<GameCard {...props} />);

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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`,
    );
  });

  it('should be render price in label', () => {
    render(<GameCard {...props} />);

    const price = screen.getByText('$250.00');

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });

  it('should be render line-through in price when promocional', () => {
    render(<GameCard promotinalPrice={200} {...props} />);

    const price = screen.getByText('$250.00');

    expect(price).toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(screen.getByText('$200.00')).not.toHaveStyle({
      textDecoration: 'line-through',
    });

    expect(price).not.toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });

  it('should be render with ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1',
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
