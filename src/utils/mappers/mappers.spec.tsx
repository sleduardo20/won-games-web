import { QueryGames_games } from 'graphql/generated/QueryGames';
import { QueryHome_sections_popularGames_highlight } from 'graphql/generated/QueryHome';
import { QueryOrders_orders } from 'graphql/generated/QueryOrders';
import { QueryHome_banners } from '../../graphql/generated/QueryHome';
import {
  bannerMapper,
  cartMapper,
  gamesMapper,
  highLightMapper,
  ordersMapper,
} from '.';

describe('bannerMapper()', () => {
  it('should be able return right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg',
      },

      title: 'Banner title',
      subtitle: 'Subtitle',
      button: {
        label: 'button label',
        link: 'button link',
      },
      ribbon: {
        text: 'ribbon text',
        color: 'secondary',
        sizes: 'small',
      },
    } as QueryHome_banners;

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'secondary',
        ribbonSize: 'small',
      },
    ]);
  });
});

describe('GamesMapper()', () => {
  it('should be able return an empty array there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([]);
  });

  it('should be able return the correcty format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer',
        },
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg',
      },
      price: 10,
    } as QueryGames_games;

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: `http://localhost:1337/image.jpg`,
        price: 10,
      },
    ]);
  });
});

describe('HighLightMapper()', () => {
  const highLight = {
    title: 'title',
    subtitle: 'subtitle',
    background: {
      url: '/image.jpg',
    },
    buttonLabel: 'button label',
    buttonLink: 'button link',
    alignment: 'right',
    floatImage: {
      url: '/image.jpg',
    },
  } as QueryHome_sections_popularGames_highlight;

  expect(highLightMapper(highLight)).toStrictEqual({
    title: 'title',
    subtitle: 'subtitle',
    backgroundImage: `http://localhost:1337/image.jpg`,
    buttonLabel: 'button label',
    buttonLink: 'button link',
    alignment: 'right',
  });
});

describe('cartMapper()', () => {
  it('should be able return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([]);
  });

  it('should be able return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg',
      },
      name: 'game',
      price: 10,
    } as QueryGames_games;

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        price: '$10.00',
        img: 'http://localhost:1337/image.jpg',
      },
    ]);
  });
});
describe('ordersMapper()', () => {
  it('should be able return empty array if no games', () => {
    expect(ordersMapper(undefined)).toStrictEqual([]);
  });

  it('should be able return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-05-19T18:41:48.359Z',
        games: [
          {
            id: '1',
            name: 'game',
            price: 10,
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
          },
        ],
      },
    ] as QueryOrders_orders[];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on May 19, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ]);
  });

  it('should be able return free game when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-05-19T18:41:48.359Z',
        games: [
          {
            id: '1',
            name: 'game',
            price: 10,
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
          },
        ],
      },
    ] as QueryOrders_orders[];

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on May 19, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ]);
  });
});
