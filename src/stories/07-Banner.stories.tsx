import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '../components/Banner';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://souce.unsplash.com/user/willianjusten/104x580',
    title: 'Defy Death',
    subtitle: '<p> Play the new <strong>CrashLands</strong> season. </p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
} as Meta;

export const Basic: Story<BannerProps> = args => <Banner {...args} />;
Basic.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
