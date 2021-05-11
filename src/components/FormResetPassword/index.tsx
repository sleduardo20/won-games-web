import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { ErrorOutline, Lock } from 'styled-icons/material-outlined';

import { api } from 'services/api';
import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLoading, FormError } from './styles';

import { FieldErrors, resetValidate } from '../../utils/validation';

const FormResetPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldErros] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    password: '',
    confirm_password: '',
  });
  const [loading, setLoading] = useState(false);

  const { query } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = resetValidate(values);

    if (Object.keys(errors).length) {
      setFieldErros(errors);
      setLoading(false);
      return;
    }

    setFieldErros({});

    await api
      .post('auth/reset-password', {
        password: values.password,
        passwordConfirmation: values.confirm_password,
        code: query.code,
      })
      .then(response => {
        signIn('credentials', {
          email: response.data.user.email,
          password: values.password,
          callbackUrl: '/',
        });
      })
      .catch(error => {
        setFormError(error.response.data.message[0].messages[0].message);
      });

    setLoading(false);
  };
  return (
    <Container>
      {formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="password"
          type="password"
          error={fieldError.password}
          onInputChange={value => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={value => handleInput('confirm_password', value)}
          icon={<Lock />}
        />
        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset password</span>}
        </Button>
      </form>
    </Container>
  );
};

export default FormResetPassword;
