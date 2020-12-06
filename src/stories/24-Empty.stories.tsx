import { Story, Meta } from '@storybook/react/types-6-0';

import Empty, { EmptyProps } from '../components/Empty';

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<EmptyProps> = args => <Empty {...args} hasLink />;

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist',
};
