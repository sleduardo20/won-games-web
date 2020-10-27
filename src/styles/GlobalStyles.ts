import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Poppins Light'), local('Poppins-Light'),
          url('/fonts/poppins-v13-latin-300.woff2') format('woff2'),
          url('/fonts/poppins-v13-latin-300.ttf') format('truetype'),
          url('/fonts/poppins-v13-latin-300.svg#Poppins') format('svg');
    }
    
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
          url('/fonts/poppins-v13-latin-regular.woff2') format('woff2'),
          url('/fonts/poppins-v13-latin-regular.ttf') format('truetype'),
          url('/fonts/poppins-v13-latin-regular.svg#Poppins') format('svg');
    }
    
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
          url('/fonts/poppins-v13-latin-600.woff2') format('woff2'),
          url('/fonts/poppins-v13-latin-600.ttf') format('truetype'),
          url('/fonts/poppins-v13-latin-600.svg#Poppins') format('svg');
    }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  html{
    font-size: 62.5%;
  }


  html,body, #__next {
    height: 100%;
  }

  body{
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.sizes.small};
    
    background-color: ${({ theme, removeBg }) =>
      removeBg ? '' : theme.colors.mainBg}}
  };
`;

export default GlobalStyles;
