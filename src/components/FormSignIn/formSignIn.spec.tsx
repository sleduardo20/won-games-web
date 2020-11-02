import { screen } from '@testing-library/react';

import FormSignIn from 'components/FormSignIn';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<FormSignIn />', () => {
  it('should be able render form correctly', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be able render forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /Esqueceu sua senha ?/i }),
    ).toBeInTheDocument();
  });

  it('should be able render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/Ainda não tem conta ?/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Cadastre-se/i })).toHaveAttribute(
      'href',
      '/sign-up',
    );
  });
});
