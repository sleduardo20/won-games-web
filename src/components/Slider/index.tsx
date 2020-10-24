import SlickSlider, { Settings } from 'react-slick';
import { Container } from './styles';

export type SliderSettings = Settings;

export interface SliderProps {
  children: React.ReactNode;
  settings: SliderSettings;
}

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
};

export default Slider;
