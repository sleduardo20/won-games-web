import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />);

    const columnContact = screen.getByRole('heading', { name: /contact/i });

    const columnFollowUs = screen.getByRole('heading', {
      name: /Follow Us/i,
    });

    const columnLinks = screen.getByRole('heading', {
      name: /Links/i,
    });

    const columnLocation = screen.getByRole('heading', {
      name: /Location/i,
    });

    expect(columnContact).toBeInTheDocument();
    expect(columnFollowUs).toBeInTheDocument();
    expect(columnLinks).toBeInTheDocument();
    expect(columnLocation).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
