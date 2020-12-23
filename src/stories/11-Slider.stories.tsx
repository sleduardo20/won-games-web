import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';

import Slider, { SliderProps } from '../components/Slider';

export default {
  title: 'components/Slider',
  component: Slider,
} as Meta;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const verticalSettings: Settings = {
  vertical: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  text-align: center;
`;

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

Horizontal.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};

Vertical.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};
