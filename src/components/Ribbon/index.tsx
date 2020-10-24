import { Container } from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export interface RibbonProps {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  );
};

export default Ribbon;
