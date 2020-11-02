import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignIn from '../components/FormSignIn';

export default {
  title: 'form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const basic: Story = args => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <FormSignIn {...args} />
  </div>
);
