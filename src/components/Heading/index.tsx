import { Container } from './styles';

export type LineColors = 'primary' | 'secondary';

export interface HeadingProps {
  children: React.ReactNode;
  color?: 'white' | 'black';
  size?: 'small' | 'medium' | 'huge';
  lineColor?: LineColors;
  lineLeft?: boolean;
  lineBottom?: boolean;
}

const Heading = ({
  children,
  color = 'white',
  lineColor = 'primary',
  size = 'medium',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => {
  return (
    <Container
      color={color}
      lineColor={lineColor}
      size={size}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
    >
      {children}
    </Container>
  );
};

export default Heading;
