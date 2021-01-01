import Button from '../Button';
import TextField from '../TextField';
import Heading from '../Heading';
import { Container, Form } from './styles';

const FormProfile = () => {
  return (
    <Container>
      <Heading lineBottom color="black" size="small">
        My Profile
      </Heading>
      <Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="John Cage"
        />
        <TextField
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          disabled
        />
        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Senha"
          disabled
        />
        <TextField
          name="new_password"
          type="password"
          placeholder="New Password"
          label="New Password"
          disabled
        />

        <Button size="large">Save</Button>
      </Form>
    </Container>
  );
};

export default FormProfile;
