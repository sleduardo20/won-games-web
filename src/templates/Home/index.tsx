import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighLightProps } from 'components/HighLight';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Menu from 'components/Menu';
import BannerSlider from 'components/BannerSlider';

import ShowCase from 'components/ShowCase';
import Base from 'templates/Base';
import {
  SectionBanner,
  SectionNews,
  SectionUpcomming,
  SectionFooter,
} from './styles';

export interface HomeTemplateProps {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighLightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighLightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighLightProps;
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
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
        <ShowCase title="News" games={newGames} />
      </SectionNews>

      <ShowCase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <SectionUpcomming>
        <ShowCase title="Up Comming" />
        <ShowCase games={upcommingGames} highlight={upcommingHighlight} />
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
