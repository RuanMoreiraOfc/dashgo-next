import { theme } from '@styles/theme';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '@c-templates/Header';

export default MyApp;

function MyApp({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();

   return (
      <ChakraProvider theme={theme}>
         {pathname !== '/' && <Header />}

         <main>
            <Component {...pageProps} />
         </main>
      </ChakraProvider>
   );
}
