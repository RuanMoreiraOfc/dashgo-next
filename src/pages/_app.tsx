import { theme } from '@styles/theme';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '@c-templates/Header';
import Sidebar from '@c-templates/Sidebar';

export default MyApp;

function MyApp({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();

   return (
      <ChakraProvider theme={theme}>
         {pathname !== '/' && <Header />}

         <main>
            {pathname !== '/' && <Sidebar />}
            <Component {...pageProps} />
         </main>
      </ChakraProvider>
   );
}
