import 'macth-media-mock';
import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Slider from 'components/Slider';

describe('<Slider />', () => {
  it('should be rendered Slider component  correctly', () => {
    render(<Slider />);

    expect(
      screen.getByRole('heading', { name: /Slider/i }),
    ).toBeInTheDocument();
  });
});
