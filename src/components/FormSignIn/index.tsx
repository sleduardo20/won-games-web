import Link from 'next/link';
import { Email, Lock } from 'styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';

import { Container, ForgotPassword, FormLink } from './styles';

const FormSignIn = () => {
  return (
    <Container>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          icon={<Lock />}
        />
      </form>
      <ForgotPassword href="#">Esqueceu sua senha ?</ForgotPassword>
      <Button size="large" fullWidth>
        Entrar
      </Button>
      <FormLink>
        Ainda não tem conta ?
        <Link href="/sign-up">
          <a>Cadastre-se</a>
        </Link>
      </FormLink>
    </Container>
  );
};

export default FormSignIn;
