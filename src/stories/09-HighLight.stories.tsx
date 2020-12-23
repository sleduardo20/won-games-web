import { Story, Meta } from '@storybook/react/types-6-0';
import HighLight, { HighLightProps } from '../components/HighLight';
import item from '../components/HighLight/mock';

export default {
  title: 'components/HighLight',
  component: HighLight,
  args: { ...item },
} as Meta;

export const Basic: Story<HighLightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
);

Basic.parameters = {
  layout: 'fullscreen',
};

export const WithImage: Story<HighLightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <HighLight {...args} />
  </div>
);
WithImage.args = {
  floatImage: 'img/imgHighLight.png',
};

WithImage.parameters = {
  layout: 'fullscreen',
};
