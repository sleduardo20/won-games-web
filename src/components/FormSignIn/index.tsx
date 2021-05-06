import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { Email, Lock, ErrorOutline } from 'styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';

import {
  Container,
  ForgotPassword,
  FormLink,
  FormLoading,
  FormError,
} from './styles';

import { FieldErrors, signInValidate } from '../../utils/validation';

const FormSignIn = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldErros] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const { push, query } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldErros(errors);
      setLoading(false);
      return;
    }

    setFieldErros({});

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query.callbackUrl || ''}`,
    });

    if (result?.url) {
      push(result?.url);
    }

    setLoading(false);

    setFormError('Username or password is invalid');
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
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={value => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={value => handleInput('password', value)}
          icon={<Lock />}
        />
        <ForgotPassword href="#">Forgot your password ?</ForgotPassword>
        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign In now</span>}
        </Button>
        <FormLink>
          Don´t have an account ?
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </Container>
  );
};

export default FormSignIn;
