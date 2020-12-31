import { Meta, Story } from '@storybook/react/types-6-0';

import ProfileMenu, { ProfileMenuProps } from '../components/ProfileMenu';

export default {
  title: 'components/ProfileMenu',
  component: ProfileMenu,
} as Meta;

export const Basic: Story<ProfileMenuProps> = args => <ProfileMenu {...args} />;
