import '../../../.jest/macth-media-mock.js';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import highlightMock from '../HighLight/mock';
import gamesMock from '../GameCardSlider/mock';

import ShowCase from '.';

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1),
};

describe('<ShowCase/>', () => {
  it('should be able render full ShowCase component correctly', () => {
    renderWithTheme(<ShowCase {...props} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
  });

  it('should be able render without title', () => {
    renderWithTheme(
      <ShowCase highlight={props.highlight} games={props.games} />,
    );

    expect(
      screen.queryByRole('heading', { name: /most popular/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
  });

  it('should be able render without games', () => {
    renderWithTheme(
      <ShowCase highlight={props.highlight} title={props.title} />,
    );

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
  });

  it('should be able render without highlight', () => {
    renderWithTheme(<ShowCase games={props.games} title={props.title} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: highlightMock.title }),
    ).not.toBeInTheDocument();
  });
});
