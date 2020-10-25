import Banner, { BannerProps } from '../Banner';
import Slider, { SliderSettings } from '../Slider';

import { Container } from './styles';

export interface BannerSliderProps {
  items: BannerProps[];
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <Container>
      <Slider settings={settings}>
        {items.map(item => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </Container>
  );
};

export default BannerSlider;
