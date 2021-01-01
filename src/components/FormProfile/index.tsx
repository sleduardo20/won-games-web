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
          placeholder="Name"
          label="E-mail"
          type="email"
        />
      </Form>
    </Container>
  );
};

export default FormProfile;
