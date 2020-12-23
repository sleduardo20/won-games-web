import { Meta, Story } from '@storybook/react/types-6-0';

import GameItem, { GameItemProps } from '../components/GameItem';

export default {
  title: 'components-game/GameItem',
  component: GameItem,
} as Meta;

export const Basic: Story<GameItemProps> = args => <GameItem {...args} />;

Basic.args = {
  title: 'Red Dead III',
  img:
    'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
  price: 'R$ 250,00',
};

export const WithPayment: Story<GameItemProps> = args => <GameItem {...args} />;

WithPayment.args = {
  title: 'Red Dead III',
  img:
    'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg?h=1080&resize=1&w=1920',
  price: 'R$ 250,00',
  downlowdLink: 'https://www.example.com.br',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 5669',
    purchaseDate: 'Purchased made on 07/12/2020 at 21:26',
  },
};
