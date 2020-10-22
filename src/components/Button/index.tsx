import { Container } from './styles';

export interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => {
  return (
    <Container size={size} fullWidth={fullWidth}>
      {!!children && <span>{children}</span>}
    </Container>
  );
};

export default Button;
