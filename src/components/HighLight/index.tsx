import Button from '../Button';
import { Container, Content, FloatImage, Title, SubTitle } from './styles';

export interface HighLightProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
}

const HighLight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
}: HighLightProps) => {
  return (
    <Container backgroundImage={backgroundImage}>
      {!!floatImage && <FloatImage src={floatImage} alt={title} />}
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
