import { InputHTMLAttributes } from 'react';
import { Container, Input, Label } from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
}

const Radio = ({
  onCheck,
  label,
  labelColor = 'white',
  labelFor = '',
  value,
  ...rest
}: RadioProps) => {
  const handleOnChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <Container>
      <Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={handleOnChange}
        {...rest}
      />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
    </Container>
  );
};

export default Radio;
