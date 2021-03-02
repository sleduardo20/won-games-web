import { useCallback } from 'react';
import { KeyboardArrowDown } from '@styled-icons/material-outlined';

import { useQuery } from '@apollo/client';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';

import Base from 'templates/Base';

import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';
import { Loader } from 'components/Loader';

import { QUERY_GAMES } from 'graphql/queries/games';
import { Main, ShowMore } from './styles';

export interface GamesTemplatesProps {
  games?: GameCardProps[];
  filterItems: ItemProps[];
}

const GamesTemplate = ({ filterItems }: GamesTemplatesProps) => {
  const { data, loading } = useQuery<QueryGames, QueryGamesVariables>(
    QUERY_GAMES,
    { variables: { limit: 15 } },
  );

  const handleFilter = useCallback(() => {
    return {};
  }, []);

  const handleShowMore = useCallback(() => {
    return {};
  }, []);

  return (
    <Base>
      <Main>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />
        {loading ? (
          <Loader />
        ) : (
          <section>
            <Grid>
              {data?.games.map(game => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover?.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <KeyboardArrowDown size={35} />
            </ShowMore>
          </section>
        )}
      </Main>
    </Base>
  );
};

export default GamesTemplate;
