import { AppProps } from 'next/app';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';

import NextProgressBar from 'nextjs-progressbar';

import { useApollo } from 'utils/apollo';

import GlobalStyles from 'styles/GlobalStyles';

import { CartProvider } from '../hooks/useCart';

import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <NextAuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="The best Game Stories in the world!"
              />
            </Head>

            <Component {...pageProps} />
            <NextProgressBar
              color="#f231a5"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <GlobalStyles />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </NextAuthProvider>
  );
}

export default App;
