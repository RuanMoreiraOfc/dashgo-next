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

import type { LinkListItemWithCaptionStyleProps } from '@c-molecules/LinkListItemWithCaption';
import LinkListItemWithCaption from '@c-molecules/LinkListItemWithCaption';

export default Sidebar;
export type { Props as SidebarProps };

type StyleProps = LimitedContainerStyleProps;

type Props = Omit<StyleProps, 'as' | 'children'>;

function Sidebar(props: Props) {
   return (
      <LimitedContainer {...sidebarStyles} {...props} as='aside'>
         <Stack {...contentStyles} as='ul'>
            <LinkListItemWithCaption
               {...linkListStyles}
               caption='Geral'
               linkListProps={[
                  {
                     to: '#',
                     children: (
                        <Fragment>
                           <Icon as={DashboardLinkIcon} />
                           <Text>Dashboard</Text>
                        </Fragment>
                     ),
                  },
                  {
                     to: '#',
                     children: (
                        <Fragment>
                           <Icon as={ContactsLinkIcon} />
                           <Text>Contatos</Text>
                        </Fragment>
                     ),
                  },
               ]}
            />
            <LinkListItemWithCaption
               {...linkListStyles}
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
   h: 'calc(100vh - 5rem)',
   pt: '6',
   px: 'unset',
   transition: 'none',
};

const contentStyles: StackProps = {
   spacing: '12',
   align: 'flex-start',
};

const linkListStyles: LinkListItemWithCaptionStyleProps = {};
