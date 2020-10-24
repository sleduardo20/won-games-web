import Button from '../Button';
import { Container, Title, SubTitle } from './styles';

export interface HighLightProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
}

const HighLight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: HighLightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Container>
  );
};

export default HighLight;
