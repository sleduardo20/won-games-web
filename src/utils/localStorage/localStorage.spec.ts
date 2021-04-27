import { getStorageItem, setStorageItem } from '.';

describe('getSorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should be able return the item from local storage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2']),
    );

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2']);
  });
});

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should be able add the item to local storage', () => {
    setStorageItem('cartItems', ['1', '2']);

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['1', '2']),
    );
  });
});
