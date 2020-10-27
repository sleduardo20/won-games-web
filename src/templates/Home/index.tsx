import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import HighLight, { HighLightProps } from 'components/HighLight';

import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Menu from 'components/Menu';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';

import {
  SectionBanner,
  SectionNews,
  SectionPopular,
  SectionUpcomming,
  SectionFreeGames,
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
    <section>
      <Container>
        <Menu />
        <SectionBanner>
          <BannerSlider items={banners} />
        </SectionBanner>
      </Container>

      <SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </SectionNews>

      <Container>
        <SectionPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>

          <HighLight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </SectionPopular>

        <SectionUpcomming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>

          <GameCardSlider items={upcommingGames} />
          <HighLight {...upcommingHighlight} />
          <GameCardSlider items={upcommingGames} />
        </SectionUpcomming>

        <SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <HighLight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </SectionFreeGames>
      </Container>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </section>
  );
};

export default Home;
