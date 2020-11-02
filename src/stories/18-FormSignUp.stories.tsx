import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignUp from '../components/FormSignUp';

export default {
  title: 'form/FormSignUp',
  component: FormSignUp,
} as Meta;

export const basic: Story = args => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <FormSignUp {...args} />
  </div>
);
