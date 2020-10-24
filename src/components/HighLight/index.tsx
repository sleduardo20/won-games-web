import Button from '../Button';
import { Container, Content, FloatImage, Title, SubTitle } from './styles';

export interface HighLightProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'left' | 'right';
}

const HighLight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}: HighLightProps) => {
  return (
    <Container backgroundImage={backgroundImage} alignment={alignment}>
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
