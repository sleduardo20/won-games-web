import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import TextContent from '.';

describe('<TextContent />', () => {
  it('should render TextContent component correctly', () => {
    renderWithTheme(<TextContent />);
  });
});
