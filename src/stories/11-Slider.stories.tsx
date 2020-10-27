import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';

import Slider, { SliderProps } from '../components/Slider';

export default {
  title: 'Slider',
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

export const horizontal: Story<SliderProps> = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

export const vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

horizontal.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};

vertical.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};
