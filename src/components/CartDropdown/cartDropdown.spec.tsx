import { defaultValuesCartContext } from 'hooks/useCart';
import { screen, render } from '../../utils/test-utils';

import CartDropdown from '.';

import items from '../CartList/mock';

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      items,
      quantity: items.length,
      total: 'R$ 300,00',
    };

    render(<CartDropdown />, { cartProviderProps });
  });

  it('should be able render CartIcon and is badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should be able render Dropdown content with cart items and total', () => {
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
