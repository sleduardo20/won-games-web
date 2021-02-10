import { Meta, Story } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '../components/Menu';

export default {
  title: 'components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<MenuProps> = args => <Menu {...args} />;

export const Logged: Story<MenuProps> = args => <Menu {...args} />;

Logged.args = {
  username: 'Eduardo Lima',
};
