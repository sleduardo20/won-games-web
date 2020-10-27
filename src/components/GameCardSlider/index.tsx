import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
} from 'styled-icons/material-outlined';

import Slider, { SliderSettings } from '../Slider';
import GameCard, { GameCardProps } from '../GameCard';

import { Container } from './styles';

export interface GameCardSliderProps {
  items: GameCardProps[];
  color?: 'white' | 'black';
}

const settings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previews games" />,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
  return (
    <Container color={color}>
      <Slider settings={settings}>
        {items.map(item => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </Container>
  );
};

export default GameCardSlider;
