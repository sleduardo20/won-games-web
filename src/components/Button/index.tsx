import { HTMLAttributes } from 'react';
import { Container } from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <Container size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {icon}
      {!!children && <span>{children}</span>}
    </Container>
  );
};

export default Button;
