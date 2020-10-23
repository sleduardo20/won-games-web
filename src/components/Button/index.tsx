import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

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
