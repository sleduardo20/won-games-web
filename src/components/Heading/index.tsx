import { Container } from './styles';

export interface HeadingProps {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => {
  return (
    <Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Container>
  );
};

export default Heading;
