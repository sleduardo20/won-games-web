import { GetServerSideProps } from 'next';

import GamesTemplate, { GamesTemplatesProps } from 'templates/Games';

import filterItemsMock from '../components/ExploreSideBar/mock';
import gamesCardMock from '../components/GameCardSlider/mock';

export default function GamesPage(props: GamesTemplatesProps) {
  return <GamesTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<GamesTemplatesProps> = async () => {
  return {
    props: {
      games: gamesCardMock,
      filterItems: filterItemsMock,
    },
  };
};
