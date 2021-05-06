import { useRouter } from 'next/router';
import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { Email, ErrorOutline } from 'styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLoading, FormError } from './styles';

import { FieldErrors, forgotValidate } from '../../utils/validation';

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldErros] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const { push, query } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues(state => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = forgotValidate(values);

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
        <Button size="large" fullWidth type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </Container>
  );
};

export default FormForgotPassword;
