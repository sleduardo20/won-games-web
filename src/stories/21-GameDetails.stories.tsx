import { Story, Meta } from '@storybook/react/types-6-0';

import GameDetails from '../components/GameDetails';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails platforms={['windows', 'linux', 'mac']} {...args} />
  </div>
);
