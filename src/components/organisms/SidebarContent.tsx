import {
   RiDashboardLine as DashboardLinkIcon,
   RiContactsLine as ContactsLinkIcon,
   RiInputMethodLine as FormLinkIcon,
   RiGitMergeLine as AutomationLinkIcon,
} from 'react-icons/ri';

import type { BoxProps, StackProps } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/react';

import type { SidebarSetionStyleProps } from '@c-molecules/SidebarSection';
import SidebarSection from '@c-molecules/SidebarSection';

export default SidebarContent;
export type {
   Props as SidebarContentProps,
   StyleProps as SidebarContentStyleProps,
};

type StyleProps = BoxProps;
type Props = Omit<StyleProps, 'as' | 'children'>;

function SidebarContent(props: Props) {
   return (
      <Stack {...contentStyles} as='ul'>
         <SidebarSection
            {...sectionStyles}
            insideOf='li'
            caption='Geral'
            linkListProps={[
               {
                  to: '/dashboard',
                  icon: DashboardLinkIcon,
                  children: 'Dashboard',
               },
               {
                  to: '/users',
                  icon: ContactsLinkIcon,
                  children: 'Contatos',
               },
            ]}
         />
         <SidebarSection
            {...sectionStyles}
            insideOf='li'
            caption='Automação'
            linkListProps={[
               {
                  to: '#',
                  icon: FormLinkIcon,
                  children: 'Formulário',
               },
               {
                  to: '#',
                  icon: AutomationLinkIcon,
                  children: 'Automação',
               },
            ]}
         />
      </Stack>
   );
}

const contentStyles: StackProps = {
   spacing: '12',
   align: 'flex-start',
};

const sectionStyles: SidebarSetionStyleProps = {};
