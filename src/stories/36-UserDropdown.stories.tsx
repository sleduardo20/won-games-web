import { Story, Meta } from '@storybook/react/types-6-0';

import UserDropdown from '../components/UserDropdown';

export default {
  title: 'components/UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => <UserDropdown {...args} />;
