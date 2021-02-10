import { Story, Meta } from '@storybook/react/types-6-0';

import UserDropdown, { UserDropdownProps } from '../components/UserDropdown';

export default {
  title: 'components/UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<UserDropdownProps> = args => (
  <div style={{ width: '90%', padding: '0 60px 0 600px' }}>
    <UserDropdown {...args} />
  </div>
);

Basic.args = {
  username: 'Eduardo Lima',
};
