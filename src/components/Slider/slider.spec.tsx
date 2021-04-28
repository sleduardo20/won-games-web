import '../../../.jest/macth-media-mock.js';

import Slider from 'components/Slider';
import { render, screen } from '../../utils/test-utils';

describe('<Slider />', () => {
  it('should be render Slider component the childrens as silider item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
