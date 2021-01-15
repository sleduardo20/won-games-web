import { Story, Meta } from '@storybook/react/types-6-0';

import ExploreSideBar, {
  ExplorerSideBarProps,
} from '../components/ExploreSideBar';

import items from '../components/ExploreSideBar/mock';

export default {
  title: 'components/ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<ExplorerSideBarProps> = args => (
  <div style={{ maxWidth: '320px', padding: 16 }}>
    <ExploreSideBar {...args} />
  </div>
);
