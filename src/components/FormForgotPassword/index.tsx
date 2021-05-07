import { useState } from 'react';

import {
  CheckCircleOutline,
  Email,
  ErrorOutline,
} from 'styled-icons/material-outlined';

import { api } from 'services/api';
import Button from '../Button';
import TextField from '../TextField';

import { Container, FormLoading, FormError, FormSuccess } from './styles';

import { FieldErrors, forgotValidate } from '../../utils/validation';

const FormForgotPassword = () => {
  const [success, setSucces] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldErros] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);

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

    await api
      .post('auth/forgot-password', {
        email: values.email,
      })
      .then(response => {
        setSucces(true);
      })
      .catch(error => {
        setFormError(error.response.data.data[0].messages[0].message);
        setSucces(false);
      });

    setLoading(false);
  };
  return (
    <Container>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {formError && (
            <FormError>
              <ErrorOutline /> {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email}
              onInputChange={value => handleInput('email', value)}
              icon={<Email />}
            />
            <Button size="large" fullWidth type="submit" disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default FormForgotPassword;
