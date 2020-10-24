import Button from '../Button';
import { Container, Content, Title, SubTitle } from './styles';

export interface HighLightProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
}

const HighLight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
}: HighLightProps) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Content>
    </Container>
  );
};

export default HighLight;
