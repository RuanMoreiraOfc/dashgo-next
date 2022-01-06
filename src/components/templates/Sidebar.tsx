import {
   RiDashboardLine as DashboardLinkIcon,
   RiContactsLine as ContactsLinkIcon,
   RiInputMethodLine as FormLinkIcon,
   RiGitMergeLine as AutomationLinkIcon,
} from 'react-icons/ri';

import { Fragment } from 'react';

import type {
   StackProps,
   TextProps,
   IconProps, //
} from '@chakra-ui/react';
import {
   Stack,
   Text,
   Icon, //
} from '@chakra-ui/react';

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
                     children: (
                        <Fragment>
                           <Icon as={DashboardLinkIcon} />
                           <Text>Dashboard</Text>
                        </Fragment>
                     ),
                  },
                  {
                     to: '/users',
                     children: (
                        <Fragment>
                           <Icon as={ContactsLinkIcon} />
                           <Text>Contatos</Text>
                        </Fragment>
                     ),
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
                     children: (
                        <Fragment>
                           <Icon as={FormLinkIcon} />
                           <Text>Formulário</Text>
                        </Fragment>
                     ),
                  },
                  {
                     to: '#',
                     children: (
                        <Fragment>
                           <Icon as={AutomationLinkIcon} />
                           <Text>Automação</Text>
                        </Fragment>
                     ),
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
