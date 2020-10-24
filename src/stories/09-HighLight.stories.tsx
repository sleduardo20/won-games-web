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

export const basic: Story<HighLightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
);

basic.parameters = {
  layout: 'fullscreen',
};

export const withImage: Story<HighLightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
);
withImage.args = {
  floatImage: 'img/imgHighLight.png',
};

withImage.parameters = {
  layout: 'fullscreen',
};
