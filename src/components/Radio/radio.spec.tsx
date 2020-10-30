import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Radio from '.';

describe('<Radio/>', () => {
  it('should be able render Radio component with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />,
    );
    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: '#fafafa' });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able render Radio component with label (black)', () => {
    renderWithTheme(
      <Radio
        label="Radio"
        labelColor="black"
        labelFor="check"
        value="anyValue"
      />,
    );
    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: '#030517' });
  });

  it('should be able render Radio component without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('should be able dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="radio"
        onCheck={onCheck}
        value="anyValue"
      />,
    );

    expect(onCheck).not.toBeCalled();

    userEvent.click(screen.getByLabelText('Radio'));

    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1);
    });

    expect(onCheck).toBeCalledWith('anyValue');
  });

  it('should be able accessible with tab', async () => {
    renderWithTheme(<Radio label="Radio" labelFor="radio" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/Radio/i)).toHaveFocus();
  });
});
