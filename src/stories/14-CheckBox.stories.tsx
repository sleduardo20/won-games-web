import { Story, Meta } from '@storybook/react/types-6-0';

import CheckBox, { CheckBoxProps } from '../components/CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
  args: {
    labelColor: 'white',
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const basic: Story<CheckBoxProps> = args => (
  <>
    <div style={{ padding: '0.8rem' }}>
      <CheckBox
        name="game"
        label="Games"
        labelfor="games"
        {...args}
        isChecked
      />
    </div>
    <div style={{ padding: '0.8rem' }}>
      <CheckBox
        name="developers"
        label="Developers"
        labelfor="developers"
        {...args}
      />
    </div>
    <div style={{ padding: '0.8rem' }}>
      <CheckBox name="actions" label="Actions" labelfor="actions" {...args} />
    </div>
  </>
);
