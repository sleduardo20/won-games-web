import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider, {
  GameCardSliderProps,
} from '../components/GameCardSlider';

import items from '../components/GameCardSlider/mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: { items },
} as Meta;

export const Basic: Story<GameCardSliderProps[]> = args => (
  <div style={{ maxWidth: '136rem', margin: '0 auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
);
