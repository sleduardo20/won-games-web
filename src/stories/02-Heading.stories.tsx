import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from '../components/Heading';

export default {
  title: 'components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story<HeadingProps> = args => <Heading {...args} />;

Basic.args = {
  children: 'Most Populars',
};

Basic.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};
