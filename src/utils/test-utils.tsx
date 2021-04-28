import { render, RenderOptions } from '@testing-library/react';
import { CartContext, CartContextData } from 'hooks/useCart';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

interface CustomRenderProps extends Omit<RenderOptions, 'queries'> {
  cartProviderProps?: CartContextData;
}

const defaultValuesCartContext = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
};

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = defaultValuesCartContext,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render };
