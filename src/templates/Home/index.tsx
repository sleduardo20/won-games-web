import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';

import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';

import ShowCase from 'components/ShowCase';
import Base from 'templates/Base';

import { SectionBanner, SectionNews } from './styles';

export interface HomeTemplateProps {
  banners: BannerProps[];
  newGames: GameCardProps[];
  newGamesTitle: string;
  mostPopularHighlight: HighLightProps;
  mostPopularGames: GameCardProps[];
  mostPopularGamesTitle: string;
  upcomingGamesTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighLightProps;
  freeGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighlight: HighLightProps;
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularHighlight,
  mostPopularGamesTitle,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <SectionBanner>
          <BannerSlider items={banners} />
        </SectionBanner>
      </Container>

      <SectionNews>
        <ShowCase title={newGamesTitle} games={newGames} color="black" />
      </SectionNews>

      <ShowCase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <ShowCase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <ShowCase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
