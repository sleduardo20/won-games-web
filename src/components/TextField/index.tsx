import { InputHTMLAttributes, useState } from 'react';
import { Container, Wrapper, Input, Label, Icon } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: 'left' | 'rigth';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInput,
  label,
  labelFor = '',
  initialValue = '',
  icon,
  disabled = false,
  iconPosition = 'left',
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
    <Container>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <Wrapper iconPosition={iconPosition} disabled={disabled}>
        {!!icon && <Icon>{icon}</Icon>}
        <Input
          type="text"
          onChange={handleOnChange}
          value={value}
          disabled={disabled}
          {...rest}
        />
      </Wrapper>
    </Container>
  );
};

export default TextField;
