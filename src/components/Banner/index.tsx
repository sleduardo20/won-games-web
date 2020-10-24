import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import Button from '../Button';
import { Container, Image, Caption, Title, Subtitle } from './styes';

export interface BannerProps {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
}

const Banner = ({
  title,
  subtitle,
  img,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize,
}: BannerProps) => {
  return (
    <Container>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

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
