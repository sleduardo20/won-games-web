import { screen, render } from '../../utils/test-utils';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walltrue',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-19T23:00:00',
  rating: 'FREE',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails />', () => {
  it('should be able render the blocks at GameDetails', () => {
    render(<GameDetails {...props} />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
  });

  it('should be able render platform icons at GameDetails', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should be able render format date at GameDetails', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Nov 19, 2020')).toBeInTheDocument();
  });

  it('should be able render free when FREE', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Gratuito')).toBeInTheDocument();
  });

  it('should be able render the Publisher', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Walltrue')).toBeInTheDocument();
  });

  it('should be able render the Developer', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Different Tales')).toBeInTheDocument();
  });

  it('should be able render 18+ when FREE', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should be able render a list of genres', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/role-playing \/ narrative/i)).toBeInTheDocument();
  });
});
