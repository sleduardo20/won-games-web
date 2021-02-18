import { GetStaticProps } from 'next';
import { initializeApollo } from 'utils/apollo';

import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';

import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 10,
      banners: data.banners.map(banner => ({
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
      newGames: mockGames,
      mostPopularHighlight: mockHightLight,
      mostPopularGames: mockGames,
      upcomingGames: mockGames,
      upcomingHighlight: mockHightLight,
      freeGames: mockGames,
      freeHighlight: mockHightLight,
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
