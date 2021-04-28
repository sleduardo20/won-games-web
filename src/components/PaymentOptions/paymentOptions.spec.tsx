import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '../../utils/test-utils';

import PaymentOptions from '.';
import mockPaymentOptions from './mock';

describe('<PaymentOptions/>', () => {
  it('should be able render saved options and the add new credit card button', () => {
    render(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />,
    );

    expect(screen.getByLabelText(/5955/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4745/i)).toBeInTheDocument();
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument();
  });

  it('should be able handle select card when clicking on the label', async () => {
    render(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />,
    );

    userEvent.click(screen.getByLabelText(/5955/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /5955/ })).toBeChecked();
    });
  });

  it('should be able not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn();

    render(
      <PaymentOptions cards={mockPaymentOptions} handlePayment={jest.fn} />,
    );

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));
    expect(handlePayment).not.toHaveBeenCalled();
  });

  it('should be able call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn();

    render(
      <PaymentOptions
        cards={mockPaymentOptions}
        handlePayment={handlePayment}
      />,
    );

    userEvent.click(screen.getByLabelText(/5955/));
    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
