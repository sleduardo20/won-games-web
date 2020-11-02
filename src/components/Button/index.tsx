import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Container, ContainerProps } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<ContainerProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    icon,
    ...rest
  },
  ref,
) => {
  return (
    <Container
      ref={ref}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...rest}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </Container>
  );
};

export default forwardRef(Button);
