import { screen, render } from '../../utils/test-utils';

import CartDropdown from '.';

import items from '../CartList/mock';

describe('<CartDropdown />', () => {
  it('should be able render CartIcon and is badge', () => {
    render(<CartDropdown items={items} total="R$ 300,00" />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should be able render Dropdown content with cart items and total', () => {
    render(<CartDropdown items={items} total="R$ 300,00" />);

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
