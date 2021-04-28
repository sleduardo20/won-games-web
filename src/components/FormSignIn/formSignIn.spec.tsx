import FormSignIn from 'components/FormSignIn';
import { screen, render } from '../../utils/test-utils';

describe('<FormSignIn />', () => {
  it('should be able render form correctly', () => {
    render(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be able render forgot password link', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha ?/i }),
    ).toBeInTheDocument();
  });

  it('should be able render the text and link to sign up', () => {
    render(<FormSignIn />);

    expect(screen.getByText(/Ainda não tem conta ?/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Cadastre-se/i })).toHaveAttribute(
      'href',
      '/sign-up',
    );
  });
});
