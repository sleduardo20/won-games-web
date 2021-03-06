import userEvent from '@testing-library/user-event';

import CheckBox from 'components/CheckBox';

import { screen, waitFor, render } from '../../utils/test-utils';

describe('<CheckBox />', () => {
  it('should be able render CheckBox component correctly with label', () => {
    render(<CheckBox label="checkbox label" labelfor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should be able render CheckBox component correctly without label', () => {
    render(<CheckBox />);

    expect(screen.queryByLabelText('CheckBox')).not.toBeInTheDocument();
  });

  it('should be able render CheckBox component with black label', () => {
    render(<CheckBox label="checkbox label" labelColor="black" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able dispath onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(<CheckBox label="checkbox label" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should be able checked onCheck when status false', async () => {
    const onCheck = jest.fn();

    render(<CheckBox label="checkbox label" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be able accessible with tab', async () => {
    render(<CheckBox label="checkbox label" labelfor="checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus();
  });
});
