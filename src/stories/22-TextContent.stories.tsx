import { Story, Meta } from '@storybook/react/types-6-0';

import TextContent, { TextContentProps } from '../components/TextContent';
import mockTextContent from '../components/TextContent/mock';

export default {
  title: 'TextContent',
  component: TextContent,
  args: mockTextContent,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<TextContentProps> = args => (
  <div style={{ width: '90rem', margin: '0 auto' }}>
    <TextContent {...args} />
  </div>
);
