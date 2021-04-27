import { GetStaticProps } from 'next';
import { initializeApollo } from 'utils/apollo';

import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { bannerMapper, gamesMapper, highLightMapper } from 'utils/mappers';
import Home, { HomeTemplateProps } from '../templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const today = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, freeGames, upcomingGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: today },
    fetchPolicy: 'no-cache', // garantir sempre dado novo na geração do estático
  });

  return {
    props: {
      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highLightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingHighlight: highLightMapper(sections?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),

      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: highLightMapper(sections?.freeGames?.highlight),
      freeGames: gamesMapper(freeGames),
    },
    revalidate: 10,
  };
};

// os metodos getStaticProps/getServerSideProps só funcionam em pages

// getStaticProps     => gera o estático em build time
// getServerSideProps => gera via ssr a cada request (código gerado é
//                       gerado no servidor nunca vai para o client)
// getInitialProps    => gera via ssr a cada request (o código gerado
//                       vai para o client, faz um hidratação do lado
//                       do client depois do primeiro request )
