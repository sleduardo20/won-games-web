import { InputHTMLAttributes, useState } from 'react';
import { Container, Label, Input } from './styles';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelfor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number;
}

const CheckBox = ({
  onCheck,
  isChecked = false,
  label,
  labelfor = '',
  labelColor = 'white',
  value,
  ...rest
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = () => {
    setChecked(state => !state);

    if (onCheck) {
      onCheck(!checked);
    }
  };
  return (
    <Container>
      <Input
        id={labelfor}
        type="checkbox"
        onChange={handleOnChange}
        checked={checked}
        value={value}
        {...rest}
      />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelfor}>
          {label}
        </Label>
      )}
    </Container>
  );
};

export default CheckBox;
