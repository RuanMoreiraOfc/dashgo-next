import {
   RiDashboardLine as DashboardLinkIcon,
   RiContactsLine as ContactsLinkIcon,
   RiInputMethodLine as FormLinkIcon,
   RiGitMergeLine as AutomationLinkIcon,
} from 'react-icons/ri';

import { Fragment } from 'react';

import type { StackProps } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

import type { LimitedContainerStyleProps } from '@c-atoms/LimitedContainer';
import LimitedContainer from '@c-atoms/LimitedContainer';

import type { LinkListWithCaptionStyleProps } from '@c-molecules/LinkListWithCaption';
import LinkListWithCaption from '@c-molecules/LinkListWithCaption';

export default Sidebar;
export type { Props as SidebarProps };

type StyleProps = LimitedContainerStyleProps;

type Props = Omit<StyleProps, 'as' | 'children'>;

function Sidebar(props: Props) {
   return (
      <LimitedContainer
         {...sidebarStyles}
         {...props}
         as='aside'
         variant='wrapper'
      >
         <Stack {...contentStyles} as='ul'>
            <LinkListWithCaption
               {...linkListStyles}
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
            <LinkListWithCaption
               {...linkListStyles}
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
      </LimitedContainer>
   );
}

const sidebarStyles: StyleProps = {
   maxW: '64',
   transition: 'none',
};

const contentStyles: StackProps = {
   spacing: '12',
   align: 'flex-start',
};

const linkListStyles: LinkListWithCaptionStyleProps = {};
