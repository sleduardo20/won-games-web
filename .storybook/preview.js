import { ThemeProvider } from 'styled-components';
import { CartContext, defaultValuesCartContext } from '../src/hooks/useCart'
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{
        ...defaultValuesCartContext,
        ...(context?.args?.cartContextValue || {}),
        ...context.args
      }}>
      <GlobalStyles removeBg />
      <Story/>
      </CartContext.Provider>
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'won-light',
    values: [
        { 
            name: 'won-light', 
            value: theme.colors.white
        },
        { 
            name: 'won-dark', 
            value: theme.colors.mainBg
        },
      ],
    },
}



