import { Container, Label, Input } from './styles';

export interface CheckBoxProps {
  label?: string;
  labelfor?: string;
  labelColor?: 'white' | 'black';
}

const CheckBox = ({
  label,
  labelfor = '',
  labelColor = 'white',
}: CheckBoxProps) => {
  return (
    <Container>
      <Input id={labelfor} type="checkbox" />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelfor}>
          {label}
        </Label>
      )}
    </Container>
  );
};

export default CheckBox;
