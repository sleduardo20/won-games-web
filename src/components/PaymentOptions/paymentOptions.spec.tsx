import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import PaymentOptions from '.';
import mockPaymentOptions from './mock';

describe('<PaymentOptions/>', () => {
  it('should be able render saved options and the add new credit card button', () => {
    renderWithTheme(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />,
    );

    expect(screen.getByLabelText(/5955/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4745/i)).toBeInTheDocument();
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument();
  });

  it('should be able handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />,
    );

    userEvent.click(screen.getByLabelText(/5955/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /5955/ })).toBeChecked();
    });
  });
});
