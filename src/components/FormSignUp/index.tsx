import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { useState } from 'react';
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline,
} from 'styled-icons/material-outlined';

import { useMutation } from '@apollo/client';

import { MUTATION_REGISTER } from '../../graphql/mutations/register';
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes';

import { FieldErrors, signUpValidate } from '../../utils/validation';

import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLink, FormLoading, FormError } from './styles';

const FormSignUp = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldErros] = useState<FieldErrors>({});
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: '',
  });

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: err =>
      setFormError(
        err.graphQLErrors[0].extensions?.exception.data.message[0].messages[0]
          .message,
      ),
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

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldErros(errors);
      return;
    }

    setFieldErros({});

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
  console.log(formError);

  return (
    <Container>
      {formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError.username}
          onInputChange={value => handleInput('username', value)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError.email}
          onInputChange={value => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError.password}
          onInputChange={value => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirmar senha"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={value => handleInput('confirm_password', value)}
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
