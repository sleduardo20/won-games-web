import { render, RenderOptions } from '@testing-library/react';
import {
  CartContext,
  CartContextData,
  defaultValuesCartContext,
} from 'hooks/useCart';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

interface CustomRenderProps extends Omit<RenderOptions, 'queries'> {
  cartProviderProps?: CartContextData;
}

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
