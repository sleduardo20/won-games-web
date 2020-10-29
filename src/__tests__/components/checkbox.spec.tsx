import { render, screen } from '@testing-library/react';

import CheckBox from 'components/CheckBox';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<CheckBox />', () => {
  it('should be able render CheckBox component correctly with label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelfor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should be able render CheckBox component correctly without label', () => {
    renderWithTheme(<CheckBox />);

    expect(screen.queryByLabelText('CheckBox')).not.toBeInTheDocument();
  });

  it('should be able render CheckBox component with black label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelColor="black" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });
});
