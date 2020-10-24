import { Story, Meta } from '@storybook/react/types-6-0';
import HighLight, { HighLightProps } from '../components/HighLight';

export default {
  title: 'HighLight',
  component: HighLight,
  args: {
    title: "Read Dead ist's back",
    backgroundImage: '/img/bgHighLight.png',
    subtitle: "Come see Jhon's new adventures",
    buttonLabel: 'buy now',
    buttonLink: '/go',
  },
} as Meta;

export const basic: Story<HighLightProps> = args => <HighLight {...args} />;
basic.parameters = {
  layout: 'fullscreen',
};
