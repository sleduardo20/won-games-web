import { Meta, Story } from '@storybook/react/types-6-0';
import Menu from '../components/Menu';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Basic: Story = args => <Menu {...args} />;

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
