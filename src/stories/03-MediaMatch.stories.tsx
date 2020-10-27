import { Story, Meta } from '@storybook/react/types-6-0';

import MediaMatch from '../components/MediaMath';

export default {
  title: 'MediaMacht',
  component: MediaMatch,
} as Meta;

export const Desktop: Story = args => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);
Desktop.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Mobile: Story = args => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  backgrounds: {
    default: 'won-dark',
  },
};
