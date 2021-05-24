import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextData } from 'hooks/useCart';

import GameCard, { GameCardProps } from '../components/GameCard';

export default {
  title: 'components-game/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://d2skuhm0vrry40.cloudfront.net/2017/articles//a/1/8/9/9/2/6/7/eurogamer-zjp1vx.jpg/EG11/thumbnail/750x422/format/jpg/quality/60',
    price: 235,
    promotinalPrice: 200,
  },
  argTypes: {
    onFav: { action: 'clicked' },
  },
} as Meta;

export const Basic: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '29rem', maxHeight: '10rem' }}>
    <GameCard {...args} />
  </div>
);
Basic.parameters = {
  layout: 'fullscreen',
};

export const IsInCart: Story<GameCardProps & CartContextData> = args => (
  <div style={{ maxWidth: '29rem', maxHeight: '10rem' }}>
    <GameCard {...args} />
  </div>
);
IsInCart.args = {
  isInCart: () => true,
};

export const withRibbon: Story<GameCardProps> = args => (
  <div style={{ maxWidth: '29rem', maxHeight: '10rem' }}>
    <GameCard {...args} />
  </div>
);
withRibbon.parameters = {
  layout: 'fullscreen',
};

withRibbon.args = {
  ribbon: '40% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small',
};
