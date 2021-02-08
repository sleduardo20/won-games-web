import { GetServerSideProps } from 'next';
import GamesTemplate, { GamesTemplatesProps } from 'templates/Games';

export default function GamesPage(props: GamesTemplatesProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<GamesTemplatesProps> = async () => {
  return {
    props: {
      games: [],
    },
  };
};
