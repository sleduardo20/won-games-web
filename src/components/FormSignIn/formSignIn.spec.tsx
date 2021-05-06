import FormSignIn from 'components/FormSignIn';
import { screen, render } from '../../utils/test-utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
}));

describe('<FormSignIn />', () => {
  it('should be able render form correctly', () => {
    render(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be able render forgot password link', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Forgot your password ?/i }),
    ).toBeInTheDocument();
  });

  it('should be able render the text and link to sign up', () => {
    render(<FormSignIn />);

    expect(screen.getByText(/Don´t have an account ?/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Sign up/i })).toHaveAttribute(
      'href',
      '/sign-up',
    );
  });
});
