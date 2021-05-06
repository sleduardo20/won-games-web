import Button from '../Button';
import TextField from '../TextField';
import Heading from '../Heading';
import { Container, Form } from './styles';

export type FormProfileProps = {
  username: string;
  email: string;
};

const FormProfile = ({ email, username }: FormProfileProps) => {
  return (
    <Container>
      <Heading lineBottom color="black" size="small">
        My Profile
      </Heading>
      <Form>
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          initialValue={username}
        />
        <TextField
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          initialValue={email}
          disabled
        />
        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Senha"
        />
        <TextField
          name="new_password"
          type="password"
          placeholder="New Password"
          label="New Password"
        />

        <Button size="large">Save</Button>
      </Form>
    </Container>
  );
};

export default FormProfile;
