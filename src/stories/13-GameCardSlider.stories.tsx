import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider, {
  GameCardSliderProps,
} from '../components/GameCardSlider';

const items = [
  {
    img:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
    title: 'Red Dead Redemption 2',
    developer: 'RocketGames',
    price: 'R$ 250,00',
    promotinalPrice: 'R$ 200,00',
  },
  {
    img:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsnowrunner%2Fhome%2FSRACCOLADESSCORESPRESS-3840x2160-cbc8668874c154b79445b22755b3080089f1789a.png?h=1080&resize=1&w=1920',
    title: 'Snow Runner',
    developer: 'RocketGames',
    price: 'R$ 250,00',
  },
  {
    img:
      'https://steamuserimages-a.akamaihd.net/ugc/446241729571906233/C22BB1D9F2F7B6AE8AEAAE86F3000563F9ECE730/?imw=1024&imh=473&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    title: 'The Witcher: Enhanced Edition 1',
    developer: 'RocketGames',
    price: 'R$ 250,00',
    promotinalPrice: 'R$ 200,00',
  },
  {
    img:
      'https://steamuserimages-a.akamaihd.net/ugc/446241729571906233/C22BB1D9F2F7B6AE8AEAAE86F3000563F9ECE730/?imw=1024&imh=473&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    title: 'The Witcher: Enhanced Editions',
    developer: 'RocketGames',
    price: 'R$ 250,00',
    promotinalPrice: 'R$ 200,00',
  },
  {
    img:
      'https://steamuserimages-a.akamaihd.net/ugc/446241729571906233/C22BB1D9F2F7B6AE8AEAAE86F3000563F9ECE730/?imw=1024&imh=473&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    title: 'The Witcher: Enhanced Edition 4',
    developer: 'RocketGames',
    price: 'R$ 250,00',
    promotinalPrice: 'R$ 200,00',
  },
  {
    img:
      'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
    title: 'Red Dead Redemption 2',
    developer: 'RocketGames',
    price: 'R$ 250,00',
    promotinalPrice: 'R$ 200,00',
  },
];

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  args: { items },
} as Meta;

export const basic: Story<GameCardSliderProps[]> = args => (
  <div style={{ maxWidth: '136rem', margin: '0 auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
);
