import { KeyboardArrowDown } from '@styled-icons/material-outlined';

import Base from 'templates/Base';

import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';

import { Main, ShowMore } from './styles';

export interface GamesTemplatesProps {
  games?: GameCardProps[];
  filterItems: ItemProps[];
}

const GamesTemplate = ({ games, filterItems }: GamesTemplatesProps) => {
  return (
    <Base>
      <Main>
        <ExploreSideBar items={filterItems} onFilter={() => 'FilterItems'} />

        <section>
          <Grid>
            {games?.map(item => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <ShowMore role="button" onClick={() => 'ShowMore'}>
            <p>Show More</p>
            <KeyboardArrowDown size={35} />
          </ShowMore>
        </section>
      </Main>
    </Base>
  );
};

export default GamesTemplate;
