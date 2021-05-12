/* eslint-disable @typescript-eslint/no-var-requires */
import userEvent from '@testing-library/user-event';
import { wishListContextDefaulValues } from 'hooks/useWishList';
import { render, screen, act, waitFor } from 'utils/test-utils';
import WishlistButton from '.';

const useSession = jest.spyOn(require('next-auth/client'), 'useSession');

const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);

describe('<WishlistButton />', () => {
  it('should be able a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => false,
    };
    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should be able a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => true,
    };
    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should be able a button with text', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => false,
    };
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should be able a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => true,
    };
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should be able not render if not logged in', () => {
    useSession.mockImplementationOnce(() => [null]);

    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => true,
    };
    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument();
  });

  it('should be able add to wishlist', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => false,
      addToWishList: jest.fn(),
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    act(() => {
      userEvent.click(screen.getByText(/add to wishlist/i));
    });

    waitFor(() => {
      expect(wishlistProviderProps.addToWishList).toHaveBeenCalledWith('1');
    });
  });

  it('should be able remove from wishlist', () => {
    const wishlistProviderProps = {
      ...wishListContextDefaulValues,
      isInWishList: () => true,
      removeFromWishList: jest.fn(),
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    act(() => {
      userEvent.click(screen.getByText(/remove from wishlist/i));
    });

    waitFor(() => {
      expect(wishlistProviderProps.removeFromWishList).toHaveBeenCalledWith(
        '1',
      );
    });
  });
});
