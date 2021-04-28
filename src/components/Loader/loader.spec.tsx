import { render } from '../../utils/test-utils';

import { Loader } from '.';

describe('<Loader />', () => {
  it('should be able render Loader correctly', () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
