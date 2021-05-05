import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { useState } from 'react';
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined';

import { useMutation } from '@apollo/client';

import { MUTATION_REGISTER } from '../../graphql/mutations/register';
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes';

import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLink, FormLoading } from './styles';

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: '',
  });

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: err => console.log(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/',
        });
    },
  });

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={value => handleInput('username', value)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={value => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          onInputChange={value => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="password-confimation"
          placeholder="Confirmar senha"
          type="password"
          onInputChange={value => handleInput('password-confimation', value)}
          icon={<Lock />}
        />
        <Button size="large" fullWidth type="submit">
          {loading ? <FormLoading /> : <span>CRIAR CONTA</span>}
        </Button>
      </form>

      <FormLink>
        Já tem uma conta?
        <Link href="/sign-in">
          <a>Entrar</a>
        </Link>
      </FormLink>
    </Container>
  );
};

export default FormSignUp;
