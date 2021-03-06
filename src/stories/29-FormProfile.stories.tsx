import { Meta, Story } from '@storybook/react/types-6-0';

import FormProfile from '../components/FormProfile';

export default {
  title: 'form/FormProfile',
  component: FormProfile,
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '860px', margin: '0 auto' }}>
    <FormProfile {...args} />
  </div>
);
