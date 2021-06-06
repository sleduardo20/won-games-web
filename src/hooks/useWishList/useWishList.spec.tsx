// eslint-disable-next-line import/no-extraneous-dependencies
import { MockedProvider } from '@apollo/client/testing';

import { renderHook } from '@testing-library/react-hooks';
import { act, waitFor } from '../../utils/test-utils';

import { WishListProvider, useWishList } from '.';
import {
  wishlistMock,
  wishlistItems,
  createWishlistMock,
  updateWishlistMock,
  removeWishlistMock,
} from './mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');

const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };

useSession.mockImplementation(() => [session]);

describe('useWishList', () => {
  it('should be able return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1],
    ]);
  });

  it('should be able check if the game is in wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.isInWishList('1')).toBe(true);
    expect(result.current.isInWishList('2')).toBe(true);
    expect(result.current.isInWishList('3')).toBe(false);
  });

  it('should be able add item in wishlist creating a new list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[createWishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    act(() => {
      result.current.addToWishList('3');
    });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([wishlistItems[2]]);
  });

  it('should be able add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      result.current.addToWishList('3');
    });

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems);
    });
  });
  it('should be able remove item from wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, removeWishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      result.current.removeFromWishList('1');
    });

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[1]]);
    });
  });
});
