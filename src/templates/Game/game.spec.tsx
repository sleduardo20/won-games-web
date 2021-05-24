import '../../../.jest/macth-media-mock.js';

import mockGallery from 'components/Gallery/mock';
import mockGameInfo from 'components/GameInfo/mock';
import mockTextContent from 'components/TextContent/mock';
import mockGameDetails from 'components/GameDetails/mock';
import mockGames from 'components/GameCardSlider/mock';
import mockHightLight from 'components/HighLight/mock';
import { GameDetailsProps } from 'components/GameDetails/index.jsx';

import { screen, render } from '../../utils/test-utils';

import Game, { GameTemplateProps } from '.';

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: mockGameInfo,
  gallery: mockGallery,
  details: mockGameDetails as GameDetailsProps,
  description: mockTextContent.content,
  upcomingTitle: 'upcoming Games',
  upcomingGames: mockGames,
  recommendedGames: mockGames,
  recommendedTitle: 'You may like these games',
  upcomingHighlight: mockHightLight,
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery" />;
    },
  };
});

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails" />;
    },
  };
});

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo" />;
    },
  };
});

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase" />;
    },
  };
});

describe('<Game />', () => {
  it('should be able render the template Game with components correctly', () => {
    render(<Game {...props} />);

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(2);
  });

  it('should not render the gallery if no images', () => {
    render(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none',
    });

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      { media: '(min-width: 768px)' },
    );
  });
});
