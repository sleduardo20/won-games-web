import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { WishListProvider, useWishList } from '.';
import { wishListMock } from './mock';

describe('useWishList', () => {
  it('should be able return wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishListMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result } = renderHook(() => useWishList(), { wrapper });
  });
});
