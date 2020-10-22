import { Container } from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Button = ({ children, size = 'medium' }: ButtonProps) => {
  return (
    <Container size={size}>{!!children && <span>{children}</span>}</Container>
  );
};

export default Button;
