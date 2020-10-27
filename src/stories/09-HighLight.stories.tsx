import { Story, Meta } from '@storybook/react/types-6-0';
import HighLight, { HighLightProps } from '../components/HighLight';
import item from '../components/HighLight/mock';

export default {
  title: 'HighLight',
  component: HighLight,
  args: { ...item },
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
