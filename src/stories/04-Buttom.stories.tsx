import { Meta, Story } from '@storybook/react/types-6-0';
import { AddShoppingCart } from 'styled-icons/material-outlined';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Basic: Story = args => <Button {...args} />;
Basic.args = {
  children: 'Buy now',
};
Basic.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const withIcon: Story = args => <Button {...args} />;
withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />,
};
withIcon.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const asLink: Story = args => <Button {...args} />;
asLink.args = {
  size: 'small',
  children: 'Buy Now',
  as: 'a',
  href: '/link',
};

asLink.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};
