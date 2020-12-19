import { screen } from '@testing-library/react';
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
});
