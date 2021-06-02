import Image from 'next/image';
import Button from '../Button';
import {
  Container,
  Content,
  FloatImageWrapper,
  Title,
  SubTitle,
} from './styles';

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
    <Container alignment={alignment} data-cy="highlight">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      {!!floatImage && (
        <FloatImageWrapper>
          <Image src={floatImage} alt={title} width={400} height={300} />
        </FloatImageWrapper>
      )}
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
