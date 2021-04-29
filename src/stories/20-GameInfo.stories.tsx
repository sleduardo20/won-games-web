import { Meta, Story } from '@storybook/react/types-6-0';
import { CartContextData } from '../hooks/useCart';

import GameInfo, { GameInfoProps } from '../components/GameInfo';

import mockGameInfo from '../components/GameInfo/mock';

export default {
  title: 'components-game/GameInfo',
  component: GameInfo,
  args: mockGameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Basic: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '144rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextData> = args => (
  <div style={{ maxWidth: '144rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
