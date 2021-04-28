import { screen, render } from '../../utils/test-utils';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should be able render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should be able render with badge', () => {
    render(<CartIcon quantity={3} />);

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });

  it('should be able render with badge only if has positive numbers', () => {
    render(<CartIcon quantity={-1} />);

    expect(screen.queryByText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
  });
});
