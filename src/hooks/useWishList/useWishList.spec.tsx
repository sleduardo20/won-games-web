import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';

import { WishListProvider, useWishList } from '.';
import { wishListMock, wishListItems } from './mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');

const session = { jwt: '123', user: { email: 'loremyspon@email.com' } };

useSession.mockImplementation(() => [session]);

describe('useWishList', () => {
  it('should be able return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishListMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishList(), {
      wrapper,
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([
      wishListItems[0],
      wishListItems[1],
    ]);
  });
});
