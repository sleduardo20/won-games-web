import { screen, render } from '../../utils/test-utils';

import CardList from '.';
import mockCardList from './mock';

describe('<CardList />', () => {
  it('should be able render correctly', () => {
    const { container } = render(
      <CardList items={mockCardList} total="R$ 330,00" />,
    );

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render the button', () => {
    render(<CardList hasButton items={mockCardList} total="R$ 330,00" />);

    expect(screen.getByText(/Buy it now/)).toBeInTheDocument();
  });

  it('should be able render empty if there are no games', () => {
    render(<CardList />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText('total')).not.toBeInTheDocument();
  });
});
