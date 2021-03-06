import '../../../.jest/session.mock';
import Menu from 'components/Menu';
import { screen, render, fireEvent } from '../../utils/test-utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  query: {},
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
}));

describe('<Menu />', () => {
  it('should be render Menu component correctly', () => {
    render(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/open shopping card/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should be hadle the open/close mobile menu', () => {
    render(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should be show register box when logged out', () => {
    render(<Menu />);

    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should be show wishlist and account when logged in ', () => {
    render(<Menu username="Eduardo" />);

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2);
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });

  it('should be able  not show sign in or dropdownUser if loading', () => {
    render(<Menu username="Eduardo" loading />);

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
  });
});
