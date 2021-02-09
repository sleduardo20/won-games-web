import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from '../components/Dropdown';

export default {
  title: 'components/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<DropdownProps> = args => <Dropdown {...args} />;

Basic.args = {
  title: 'Click here',
  children: 'content',
};
