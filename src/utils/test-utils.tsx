import { render, RenderOptions } from '@testing-library/react';

import {
  CartContext,
  CartContextData,
  defaultValuesCartContext,
} from 'hooks/useCart';

import {
  WishListContext,
  WishListContextData,
  wishListContextDefaulValues,
} from 'hooks/useWishList';

import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

interface CustomRenderProps extends Omit<RenderOptions, 'queries'> {
  cartProviderProps?: CartContextData;
  wishlistProviderProps?: WishListContextData;
}

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = defaultValuesCartContext,
    wishlistProviderProps = wishListContextDefaulValues,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishListContext.Provider value={wishlistProviderProps}>
          {ui}
        </WishListContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render };
