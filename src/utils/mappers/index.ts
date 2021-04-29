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

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map(game => ({
        id: game.id,
        name: game.name,
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
