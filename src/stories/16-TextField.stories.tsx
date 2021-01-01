import { Story, Meta } from '@storybook/react/types-6-0';
import { Mail } from 'styled-icons/material-outlined';

import TextField, { TextFieldProps } from '../components/TextField';

export default {
  title: 'Form/TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Mail />,
    initialValue: '',
    placeholder: 'Digite o E-mail',
  },
  argTypes: {
    icon: { type: '' },
    onInput: { action: 'changed' },
  },
} as Meta;

export const Basic: Story<TextFieldProps> = args => (
  <div>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = args => (
  <div>
    <TextField error="This is Error" {...args} />
  </div>
);
