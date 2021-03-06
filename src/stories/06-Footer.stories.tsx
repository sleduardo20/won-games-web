import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '../components/Footer';

export default {
  title: 'components/Footer',
  component: Footer,
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
);

Basic.parameters = {
  backgrounds: {
    default: 'won-dark',
  },
};
