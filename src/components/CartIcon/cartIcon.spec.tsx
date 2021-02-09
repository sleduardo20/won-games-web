import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should be able render without badge', () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });
});
