import Image from 'next/image';

import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import Button from '../Button';
import { Container, ImageWrapper, Caption, Title, Subtitle } from './styles';

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

      <ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </ImageWrapper>

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
