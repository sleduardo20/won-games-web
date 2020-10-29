import { Story, Meta } from '@storybook/react/types-6-0';

import CheckBox, { CheckBoxProps } from '../components/CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
  args: {
    label: 'Games',
    labelfor: 'games',
    labelColor: 'black',
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const basic: Story<CheckBoxProps> = args => (
  <CheckBox {...args} isChecked />
);
