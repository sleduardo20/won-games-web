import { render } from '@testing-library/react';

import { Loader } from '.';

describe('<Loader />', () => {
  it('should be able render Loader correctly', () => {
    const { container, debug } = render(<Loader />);

    debug(container);

    expect(container.firstChild).toMatchSnapshot();
  });
});
