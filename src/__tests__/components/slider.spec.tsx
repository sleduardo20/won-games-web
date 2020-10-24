import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Slider from '../../components/Slider';

describe('<Slider />', () => {
  it('should be render corretly', () => {
    renderWithTheme(<Slider />);
  });
});
