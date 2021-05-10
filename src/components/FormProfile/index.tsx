import Link from 'next/link';
import Button from '../Button';
import TextField from '../TextField';
import Heading from '../Heading';
import { Container, Form, ButtonContainer } from './styles';

export type FormProfileProps = {
  username?: string;
  email?: string;
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

        <ButtonContainer>
          <Link href={`/forgot-password?email=${email}`} passHref>
            <Button as="a" size="medium" minimal>
              Reset Password
            </Button>
          </Link>
          <Button size="medium">Save</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormProfile;
