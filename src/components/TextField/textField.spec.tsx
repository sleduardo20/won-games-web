import { screen, waitFor } from '@testing-library/react';
import { Mail } from 'styled-icons/material-outlined';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField/>', () => {
  it('should be able render TextField component with label', () => {
    renderWithTheme(<TextField name="label" label="label" />);

    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('should be able render TextField component without label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });

  it('should be able render TextField component with placeholder', () => {
    renderWithTheme(<TextField placeholder="email" />);

    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
  });

  it('should be able changes its value when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(<TextField name="label" label="label" onInput={onInput} />);

    const input = screen.getByRole('textbox');
    const text = 'new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toBeCalledWith(text);
  });

  it('should be able accessible by tab', () => {
    renderWithTheme(<TextField label="textfield" name="label" />);

    const input = screen.getByLabelText('textfield');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).toHaveFocus();
  });

  it('should be able accessible by tab when disabled', () => {
    renderWithTheme(<TextField disabled name="textfield" label="textfield" />);

    const input = screen.getByLabelText('textfield');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).not.toHaveFocus();
  });

  it('should be able render TextField component with icon', () => {
    renderWithTheme(
      <TextField placeholder="email" icon={<Mail data-testid="icon" />} />,
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should be able render TextField component with icon position left', () => {
    renderWithTheme(
      <TextField icon={<Mail data-testid="icon" />} iconPosition="left" />,
    );

    const wrapper = screen.getByRole('textbox').parentElement;

    expect(wrapper).toHaveStyle({ display: 'flex' });
  });

  it('should be able render TextField component with icon position rigth', () => {
    renderWithTheme(
      <TextField icon={<Mail data-testid="icon" />} iconPosition="rigth" />,
    );

    const wrapper = screen.getByRole('textbox').parentElement;

    expect(wrapper).toHaveStyle({ flex: 'row-reverse' });
  });

  it('should be able render TextField component with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Mail data-testid="icon" />}
        name="textfield"
        label="textfield"
        error="Error Message"
      />,
    );

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should be able disabled Input if propity is true', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();

    const text = 'This is my text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });
});
