import {
   RiDashboardLine as DashboardLinkIcon,
   RiContactsLine as ContactsLinkIcon,
   RiInputMethodLine as FormLinkIcon,
   RiGitMergeLine as AutomationLinkIcon,
} from 'react-icons/ri';

import { useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '@contexts/SidebarDrawerContext';

import type {
   BoxProps,
   DrawerContentProps, //
} from '@chakra-ui/react';
import {
   Box,
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerHeader,
   DrawerBody,
} from '@chakra-ui/react';

import type { SidebarContentStyleProps } from '@c-organisms/SidebarContent';
import SidebarContent from '@c-organisms/SidebarContent';

export default Sidebar;
export type { Props as SidebarProps };

type StyleProps = BoxProps;
type Props = Omit<StyleProps, 'as' | 'children'>;

function Sidebar(props: Props) {
   const { isOpen, onClose } = useSidebarDrawer();
   const isDrawerSidebar = useBreakpointValue({ base: true, lg: false });

   if (isDrawerSidebar) {
      return (
         <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
               <DrawerContent {...drawerContentStyles}>
                  <DrawerCloseButton mt='6' />
                  <DrawerHeader>Navegação</DrawerHeader>

                  <DrawerBody>
                     <SidebarContent {...sidebarContentStyles} />
                  </DrawerBody>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      );
   }

   return (
      <Box {...sidebarStyles} {...props} as='aside'>
         <SidebarContent {...sidebarContentStyles} />
      </Box>
   );
}
const drawerContentStyles: DrawerContentProps = {
   p: '4',
   bgColor: 'gray.800',
};

const sidebarStyles: StyleProps = {
   maxW: '64',
   width: '100%',
   transition: 'none',
};

const sidebarContentStyles: SidebarContentStyleProps = {};
