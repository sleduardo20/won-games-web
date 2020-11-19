import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-19T23:00:00',
};

describe('<GameDetails />', () => {
  it('should be able render the blocks at GameDetails', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
  });

  it('should be able render platform icons at GameDetails', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should be able render format date at GameDetails', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 19, 2020')).toBeInTheDocument();
  });
});
