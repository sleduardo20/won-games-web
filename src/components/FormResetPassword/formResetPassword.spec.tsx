// eslint-disable-next-line import/no-unresolved
import 'server.mock';
import { signIn } from 'next-auth/client';

import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../utils/test-utils';

import FormResetPassword from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};

useRouter.mockImplementation(() => ({
  query,
}));

jest.mock('next-auth/client', () => ({
  signIn: jest.fn(),
}));

describe('<FormResetPassword />', () => {
  it('should be able render the form', () => {
    render(<FormResetPassword />);

    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/confirm password/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /reset password/i }),
    ).toBeInTheDocument();
  });

  it('should be able show validation errors', async () => {
    render(<FormResetPassword />);

    await userEvent.type(screen.getByPlaceholderText('password'), '123');

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '1234',
    );

    userEvent.click(screen.getByRole('button', { name: /reset password/i }));

    expect(await screen.findByText(/confirm password does not match/i));
  });

  it('should be able show error when code provider is wrong', async () => {
    query = { code: 'wrong_code' };

    render(<FormResetPassword />);

    await userEvent.type(screen.getByPlaceholderText('password'), '123');

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '123',
    );

    userEvent.click(screen.getByRole('button', { name: /reset password/i }));

    expect(await screen.findByText(/incorrect code provider/i));
  });

  it('should be able reset password and sign in the user', async () => {
    query = { code: 'rith_code' };

    render(<FormResetPassword />);

    await userEvent.type(screen.getByPlaceholderText('password'), '123');

    await userEvent.type(
      screen.getByPlaceholderText(/confirm password/i),
      '123',
    );

    userEvent.click(screen.getByRole('button', { name: /reset password/i }));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123',
        callbackUrl: '/',
      });
    });
  });
});
