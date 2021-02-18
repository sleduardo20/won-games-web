import { GetStaticProps } from 'next';
import { initializeApollo } from 'utils/apollo';

import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const {
    data: { banners, newGames, freeGames, upcomingGames, sections },
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 10,

      banners: banners.map(banner => ({
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
      })),

      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map(game => ({
        name: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment,
      },
      mostPopularGames: sections!.popularGames!.games.map(game => ({
        name: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment,
      },
      upcomingGames: upcomingGames.map(game => ({
        name: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),

      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        alignment: sections?.freeGames?.highlight?.alignment,
      },
      freeGames: freeGames.map(game => ({
        name: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),
    },
  };
};

// os metodos getStaticProps/getServerSideProps só funcionam em pages

// getStaticProps     => gera o estático em build time
// getServerSideProps => gera via ssr a cada request (código gerado é
//                       gerado no servidor nunca vai para o client)
// getInitialProps    => gera via ssr a cada request (o código gerado
//                       vai para o client, faz um hidratação do lado
//                       do client depois do primeiro request )
