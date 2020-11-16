import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '../components/Banner';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80',
    title: 'Defy Death',
    subtitle: '<p> Play the new <strong>CrashLands</strong> season. </p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
} as Meta;

export const Basic: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);
Basic.parameters = {
  layout: 'fullscreen',
};

export const WithRibbon: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

WithRibbon.parameters = {
  layout: 'fullscreen',
};

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
