import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';

import { Container } from 'components/Container';
import BannerSlider from 'components/BannerSlider';

import ShowCase from 'components/ShowCase';
import Base from 'templates/Base';

import { SectionBanner, SectionNews, SectionUpcomming } from './styles';

export interface HomeTemplateProps {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighLightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighLightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighLightProps;
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
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
        <ShowCase title="News" games={newGames} color="black" />
      </SectionNews>

      <ShowCase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <SectionUpcomming>
        <ShowCase title="Up Comming" />
        <ShowCase
          games={upcomingGames}
          highlight={upcomingHighlight}
          color="white"
        />
      </SectionUpcomming>

      <ShowCase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
