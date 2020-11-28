import Game, { GameTemplateProps } from '../../templates/Game';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// gerar as rotas em tempo de build
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'batman' } }],
    fallback: false,
  };
}

// gerar os dados de forma estática
export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/e5afc0564e689bc226f9d748df7b0eee7d16af21761654c9d4f5d2da71ebd7fe.jpg',
    },
  };
}
