import '../../../.jest/macth-media-mock.js';

import GameCardSlider from 'components/GameCardSlider';
import { renderWithTheme } from 'utils/tests/helpers';

import items from './mock';

describe('<GameCardSlider/>', () => {
  it('should be render GameCardSlider component correctly', () => {
    renderWithTheme(<GameCardSlider items={items} />);
  });
});
