import { fireEvent, screen } from '@testing-library/react';
import '../../../.jest/macth-media-mock.js';
import { renderWithTheme } from 'utils/tests/helpers';

import Gallery from '.';
import mockGallery from './mock';

describe('<Gallery />', () => {
  it('should be able render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 01/i }),
    ).toHaveAttribute('src', mockGallery[0].src);
  });

  it('should be able render open modal', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 01/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });
});
