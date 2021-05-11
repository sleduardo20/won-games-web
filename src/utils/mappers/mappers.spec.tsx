import { QueryGames_games } from 'graphql/generated/QueryGames';
import { QueryHome_sections_popularGames_highlight } from 'graphql/generated/QueryHome';
import { QueryHome_banners } from '../../graphql/generated/QueryHome';
import { bannerMapper, cartMapper, gamesMapper, highLightMapper } from '.';

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
