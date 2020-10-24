import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '../components/Banner';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: 'Defy Death',
    subtitle: '<p> Play the new <strong>CrashLands</strong> season. </p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
} as Meta;

export const Basic: Story<BannerProps> = args => <Banner {...args} />;
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
