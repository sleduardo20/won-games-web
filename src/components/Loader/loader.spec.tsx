import { renderWithTheme } from 'utils/tests/helpers';

import { Loader } from '.';

describe('<Loader />', () => {
  it('should be able render Loader correctly', () => {
    const { container } = renderWithTheme(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
