import Button from '../Button';
import { Container, Image, Caption, Title, Subtitle } from './styes';

export interface BannerProps {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
}

const Banner = ({
  title,
  subtitle,
  img,
  buttonLabel,
  buttonLink,
}: BannerProps) => {
  return (
    <Container>
      <Image src={img} role="img" aria-label={title} />

      <Caption>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" size="large" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Caption>
    </Container>
  );
};

export default Banner;
