import { defaultValuesCartContext } from 'hooks/useCart';
import userEvent from '@testing-library/user-event';
import { screen, render } from '../../utils/test-utils';

import { CartButton } from '.';

describe('<CartButton />', () => {
  it('should be able render button to add and call the method if clicked', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      isInCart: () => false,
      addToCart: jest.fn(),
    };

    render(<CartButton id="1" />, { cartProviderProps });

    const button = screen.getByLabelText(/add to cart/i);
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1');
  });

  it('should be able render button to remove and call the method if clicked', () => {
    const cartProviderProps = {
      ...defaultValuesCartContext,
      isInCart: () => true,
      removeFromCart: jest.fn(),
    };

    render(<CartButton id="1" />, { cartProviderProps });

    const button = screen.getByLabelText(/remove from cart/i);
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1');
  });
});
