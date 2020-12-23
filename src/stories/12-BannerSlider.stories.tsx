import { Story, Meta } from '@storybook/react/types-6-0';

import BannerSlider, { BannerSliderProps } from '../components/BannerSlider';

import items from '../components/BannerSlider/mock';

export default {
  title: 'components/BannerSlider',
  component: BannerSlider,
  args: { items },
} as Meta;

export const Basic: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark',
  },
};
