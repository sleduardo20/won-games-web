import { Story, Meta } from '@storybook/react/types-6-0';

import GameDetails, { GameDetailsProps } from '../components/GameDetails';
import mockGameDetails from '../components/GameDetails/mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },

    releaseDate: {
      control: {
        type: 'date',
      },
    },

    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action'],
      },
    },
  },
} as Meta;

export const Basic: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
