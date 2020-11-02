import Link from 'next/link';
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLink } from './styles';

const FormSignUp = () => {
  return (
    <Container>
      <form>
        <TextField
          name="name"
          placeholder="Nome"
          type="text"
          icon={<AccountCircle />}
        />

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
        <TextField
          name="password-confimation"
          placeholder="Confirmar senha"
          type="password"
          icon={<Lock />}
        />
      </form>
      <Button size="large" fullWidth>
        CRIAR CONTA
      </Button>
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
