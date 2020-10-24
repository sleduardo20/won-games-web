import { Story, Meta } from '@storybook/react/types-6-0';

import GameCard, { GameCardProps } from '../components/GameCard';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    develover: 'Rockstar Games',
    img:
      'https://d2skuhm0vrry40.cloudfront.net/2017/articles//a/1/8/9/9/2/6/7/eurogamer-zjp1vx.jpg/EG11/thumbnail/750x422/format/jpg/quality/60',
    price: 'R$ 235,00',
  },
} as Meta;

export const basic: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
);
basic.parameters = {
  layout: 'fullscreen',
};
