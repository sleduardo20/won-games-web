// eslint-disable-next-line import/no-extraneous-dependencies
import { MockedProvider } from '@apollo/client/testing';
import FormSignUp from 'components/FormSignUp';
import { screen, render } from '../../utils/test-utils';

describe('<FormSignUp />', () => {
  it('should be able render form correctly', () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>,
    );

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Conform password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /criar conta/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render the text and link to sign in', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>,
    );

    expect(screen.getByText(/Já tem uma conta?/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Entrar/i })).toHaveAttribute(
      'href',
      '/sign-in',
    );
  });
});
