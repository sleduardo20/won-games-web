import { QueryWishList_wishlists_games } from 'graphql/generated/QueryWishList';
import { QueryOrders_orders } from 'graphql/generated/QueryOrders';
import {
  QueryHome_banners,
  QueryHome_sections_popularGames_highlight,
} from '../../graphql/generated/QueryHome';
import { QueryGames_games } from '../../graphql/generated/QueryGames';
import { formatPrice } from '../formatPrice';

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(banner => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.sizes,
    }),
  }));
};

export const gamesMapper = (
  games:
    | QueryGames_games[]
    | QueryWishList_wishlists_games[]
    | null
    | undefined,
) => {
  return games
    ? games.map(game => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      }))
    : [];
};

export const highLightMapper = (
  highLigth: QueryHome_sections_popularGames_highlight | null | undefined,
) => {
  return (
    highLigth && {
      title: highLigth.title,
      subtitle: highLigth.subtitle,
      backgroundImage: `http://localhost:1337${highLigth.background?.url}`,
      buttonLabel: highLigth.buttonLabel,
      buttonLink: highLigth.buttonLink,
      alignment: highLigth.alignment,
    }
  );
};

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map(game => ({
        id: game.id,
        title: game.name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: formatPrice(game.price),
      }))
    : [];
};

export const ordersMapper = (orders: QueryOrders_orders[]) => {
  return orders
    ? orders.map(order => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(order.created_at))}`,
          },
          games: order.games.map(game => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `http://localhost:1337${game.cover?.url}`,
            price: formatPrice(game.price),
          })),
        };
      })
    : [];
};
