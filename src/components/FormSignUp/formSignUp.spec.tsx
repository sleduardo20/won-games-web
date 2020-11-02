import { screen } from '@testing-library/react';

import FormSignUp from 'components/FormSignUp';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<FormSignUp />', () => {
  it('should be able render form correctly', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar senha')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /criar conta/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByText(/Já tem uma conta?/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Entrar/i })).toHaveAttribute(
      'href',
      '/sign-in',
    );
  });
});
