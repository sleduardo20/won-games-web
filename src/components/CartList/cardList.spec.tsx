import { defaultValuesCartContext } from 'hooks/useCart';
import { screen, render } from '../../utils/test-utils';

import CardList from '.';
import items from './mock';

describe('<CardList />', () => {
  it('should be able render correctly', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      items,
      total: 'R$ 330,00',
    };

    const { container } = render(<CardList />, { cartProviderProps });

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render the button', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      items,
    };

    render(<CardList hasButton />, { cartProviderProps });

    expect(screen.getByText(/Buy it now/)).toBeInTheDocument();
  });

  it('should be able render loading', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      items,
      loading: true,
    };

    render(<CardList hasButton />, { cartProviderProps });

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it('should be able render empty if there are no games', () => {
    render(<CardList />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText('total')).not.toBeInTheDocument();
  });
});
