import { Story, Meta } from '@storybook/react/types-6-0';

import ExploreSideBar from '../components/ExploreSideBar';

// import itemsMock from '../components/ExploreSideBar/mock';

export default {
  title: 'components/ExploreSideBar',
  component: ExploreSideBar,

  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '850px', margin: '0 auto' }}>
    <ExploreSideBar {...args} />
  </div>
);
