import { theme } from '@styles/theme';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';

import SidebarDrawerProvider from '@contexts/SidebarDrawerContext';

import LimitedContainer from '@c-atoms/LimitedContainer';

import Header from '@c-templates/Header';
import Sidebar from '@c-templates/Sidebar';

export default MyApp;

function MyApp({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();

   const isNotAtHome = pathname !== '/';

   return (
      <ChakraProvider theme={theme}>
         <SidebarDrawerProvider>
            {isNotAtHome && <Header />}

            <LimitedContainer
               pt={isNotAtHome ? '6' : undefined}
               align='flex-start'
               as='main'
            >
               {isNotAtHome && <Sidebar />}
               <Component {...pageProps} />
            </LimitedContainer>
         </SidebarDrawerProvider>
      </ChakraProvider>
   );
}
