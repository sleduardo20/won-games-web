import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameDetails from '.';

describe('<GameDetailsComponent/>', () => {
  it('should be able render GameDetails', () => {
    renderWithTheme(<GameDetails />);
  });
});
