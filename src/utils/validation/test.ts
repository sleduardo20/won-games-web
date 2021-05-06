import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate,
} from '.';

describe('Validation', () => {
  describe('signInValidate', () => {
    it('should be able validate empty fields', () => {
      const values = { email: '', password: '' };

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty',
      });
    });

    it('should be able validate email error', () => {
      const values = { email: 'invalid-email', password: '1234' };

      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`,
      );
    });
  });
  describe('signUpValidate', () => {
    it('should be able validate empty fields', () => {
      const values = { username: '', email: '', password: '' };

      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        username: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String),
      });
    });

    it('should be able return short username error', () => {
      const values = { username: 'hi', email: '', password: '' };

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`,
      );
    });

    it('should be able return invalid email error', () => {
      const values = {
        username: 'John Doe',
        email: 'email invalid',
        password: '',
      };

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`,
      );
    });

    it('should be able return error if password does not match confirm password', () => {
      const values = {
        username: 'John Doe',
        email: 'john@gmail.com',
        password: '1234',
        confirm_password: '12344',
      };

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `" confirm password does not match with password"`,
      );
    });
  });
  describe('forgotValidate', () => {
    it('should be able validate empty fields', () => {
      const values = { email: '' };

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
      });
    });

    it('should be able validate email error', () => {
      const values = { email: 'invalid-email' };

      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`,
      );
    });
  });
  describe('resetValidate', () => {
    it('should be able validate empty fields', () => {
      const values = { password: '', confirm_password: '' };

      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String),
      });
    });

    it('should be able validate confirm password when empty', () => {
      const values = { password: '123', confirm_password: '' };

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm_password\\" is not allowed to be empty"`,
      );
    });

    it('should be able validate confirm password when different', () => {
      const values = { password: '123', confirm_password: '1234' };

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `" confirm password does not match with password"`,
      );
    });
  });
});
