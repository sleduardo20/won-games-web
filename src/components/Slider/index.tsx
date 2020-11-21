import { forwardRef } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { Container } from './styles';

export type SliderSettings = Settings;

export interface SliderProps {
  children: React.ReactNode;
  settings: SliderSettings;
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref,
) => {
  return (
    <Container>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </Container>
  );
};

export default forwardRef(Slider);
