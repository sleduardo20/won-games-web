// eslint-disable-next-line import/no-unresolved
import 'server.mock.ts';
import userEvent from '@testing-library/user-event';
import { render, screen } from 'utils/test-utils';

import FormForgotPassword from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

let query = {};

useRouter.mockImplementation(() => ({
  query,
}));

describe('<FormForgotPassword />', () => {
  it('should be able render the form', () => {
    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send email/i }),
    ).toBeInTheDocument();
  });

  it('should be able validate the email', async () => {
    render(<FormForgotPassword />);

    userEvent.type(screen.getByPlaceholderText(/email/i), 'valid@email.com');

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(
      await screen.findByText(/You just received an email!/i),
    ).toBeInTheDocument();
  });

  it('should be able show an invalid email', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid');

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(
      await screen.findByText(/must be a valid email/i),
    ).toBeInTheDocument();
  });

  it('should be able show an inexistent email error', async () => {
    render(<FormForgotPassword />);

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com',
    );

    userEvent.click(screen.getByRole('button', { name: /send email/i }));

    expect(
      await screen.findByText(/This email does not exist/i),
    ).toBeInTheDocument();
  });

  it('should be able autofill if comes via logged user', async () => {
    query = { email: 'valid@email.com' };

    render(<FormForgotPassword />);

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue(
      'valid@email.com',
    );
  });
});
