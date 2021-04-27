import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { KeyboardArrowDown } from '@styled-icons/material-outlined';

import { useQueryGames } from 'graphql/queries/games';

import {
  parseQueryStringToWhere,
  parseQueryStringToFilter,
} from 'utils/filter';

import Base from 'templates/Base';

import ExploreSideBar, { ItemProps } from 'components/ExploreSideBar';
import GameCard from 'components/GameCard';
import { Grid } from 'components/Grid';
import { Loader, LoaderEclipse } from 'components/Loader';
import Empty from 'components/Empty';

import { Main, ShowMore, ShowMoreButton } from './styles';

export interface GamesTemplatesProps {
  filterItems: ItemProps[];
}

const GamesTemplate = ({ filterItems }: GamesTemplatesProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  if (!data) return <p>loading...</p>;

  const { games, gamesConnection } = data;

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0);

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    });
  };

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length,
      },
    });
  };

  return (
    <Base>
      <Main>
        <ExploreSideBar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map(game => (
                  <GameCard
                    key={game.slug}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover!.url}`}
                    price={game.price}
                  />
                ))}
              </Grid>

              {hasMoreGames && (
                <ShowMore>
                  {loading ? (
                    <LoaderEclipse />
                  ) : (
                    <ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <KeyboardArrowDown size={35} />
                    </ShowMoreButton>
                  )}
                </ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games this filter"
              hasLink
            />
          )}
        </section>
      </Main>
    </Base>
  );
};

export default GamesTemplate;
