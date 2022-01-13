import type { ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import type { UseDisclosureReturn } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default SidebarDrawerProvider;
export type {
   Props as SidebarDrawerContextProps,
   ProviderProps as SidebarDrawerProviderProps,
};
export { useSidebarDrawer };

type Props = UseDisclosureReturn;

const Context = createContext({} as Props);

const useSidebarDrawer = () => useContext(Context);

type ProviderProps = {
   children: ReactNode;
};

function SidebarDrawerProvider({ children }: ProviderProps) {
   const router = useRouter();
   const discolosure = useDisclosure();

   useEffect(() => {
      discolosure.onClose();
   }, [router.asPath]);

   return (
      <Context.Provider
         value={discolosure} //
      >
         {children}
      </Context.Provider>
   );
}
