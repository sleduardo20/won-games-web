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

  it('should be able render open modal', async () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 02/i }),
    );

    const img = await await screen.findByRole('img', {
      name: /gallery image 02/i,
    });

    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should be able render open modal selected image', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 01/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should be able close modal button is clicked', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 01/i }),
    );

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should be able render close modal press key ESC', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockGallery.slice(0, 2)} />,
    );

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 01/i }),
    );

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal).toHaveStyle({ opacity: 0 });
    expect(modal.getAttribute('aria-hidden')).toBe('true');
  });
});
