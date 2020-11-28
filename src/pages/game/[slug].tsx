import { GetStaticPaths, GetStaticProps } from 'next';
import mockGallery from 'components/Gallery/mock';
import Game, { GameTemplateProps } from '../../templates/Game';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// gerar as rotas em tempo de build
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'batman' } }],
    fallback: false,
  };
};

// gerar os dados de forma estática
export const getStaticProps: GetStaticProps<GameTemplateProps> = async () => {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/e5afc0564e689bc226f9d748df7b0eee7d16af21761654c9d4f5d2da71ebd7fe.jpg',
      gameInfo: {
        title: 'Batman: Arkham Asylum Game of the Year Edition',
        description:
          'Critically acclaimed Batman: Arkham Asylum returns with a remastered Game of the Year Edition, featuring 4 extra Challenge Maps. The additional Challenge Maps are Crime Alley; Scarecrow Nightmare; Totally Insane and Nocturnal Hunter (both from the Insane Night Map Pack).',
        price: '9,29',
      },
      gallery: mockGallery,
    },
  };
};
