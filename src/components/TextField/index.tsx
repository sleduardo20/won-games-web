import { InputHTMLAttributes, useState } from 'react';
import { Container, Wrapper, Input, Label, Icon, Error } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: 'left' | 'rigth';
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInput,
  label,
  name,
  initialValue = '',
  icon,
  disabled = false,
  iconPosition = 'left',
  error,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    if (onInput) {
      onInput(newValue);
    }
  };

  return (
    <Container iconPosition={iconPosition} disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <Wrapper>
        {!!icon && <Icon>{icon}</Icon>}
        <Input
          type="text"
          onChange={handleOnChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      </Wrapper>
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};

export default TextField;
