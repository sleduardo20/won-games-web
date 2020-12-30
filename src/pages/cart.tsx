import { GetServerSideProps } from 'next';
import Cart, { CartProps } from '../templates/Cart';

import gamesMock from '../components/GameCardSlider/mock';
import hightLightMock from '../components/HighLight/mock';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighLight: hightLightMock,
    },
  };
};
