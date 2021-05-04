import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { Email, Lock } from 'styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';

import { Container, ForgotPassword, FormLink } from './styles';

const FormSignIn = () => {
  const [values, setValues] = useState({});

  const { push } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/`,
    });

    if (result?.url) {
      return push(result?.url);
    }

    console.log('email ou senha invalida');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={value => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={value => handleInput('password', value)}
          icon={<Lock />}
        />
        <ForgotPassword href="#">Forgot your password ?</ForgotPassword>
        <Button size="large" fullWidth type="submit">
          Sign In now
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
