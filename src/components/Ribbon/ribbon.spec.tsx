import Ribbon from 'components/Ribbon';

import { render, screen } from '../../utils/test-utils';

describe('<Ribbon />', () => {
  it('should be render the text correctly', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toBeInTheDocument();
  });

  it('should be render with primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      background: '#f231a5',
    });
  });

  it('should be render with secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      background: '#3cd3c1',
    });
  });

  it('should be render with the normal size as default', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });

  it('should be render with the small size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
