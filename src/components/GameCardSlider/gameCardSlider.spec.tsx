import '../../../.jest/macth-media-mock.js';
import '../../../.jest/session.mock';

import GameCardSlider from 'components/GameCardSlider';
import { render } from '../../utils/test-utils';

import items from './mock';

describe('<GameCardSlider/>', () => {
  it('should be render GameCardSlider component correctly', () => {
    render(<GameCardSlider items={items} />);
  });
});
