import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { RadioProps } from '../components/Radio';

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const basic: Story<RadioProps> = args => (
  <div style={{ margin: '0 auto', width: '90rem' }}>
    <div style={{ padding: '1.2rem' }}>
      <Radio id="primeiro" label="Primeiro" value="1" {...args} />
    </div>
    <div style={{ padding: '1.2rem' }}>
      <Radio id="segundo" label="Segundo" value="2" {...args} />
    </div>
    <div style={{ padding: '1.2rem' }}>
      <Radio id="terceiro" label="Terceiro" value="3" {...args} />
    </div>
  </div>
);
