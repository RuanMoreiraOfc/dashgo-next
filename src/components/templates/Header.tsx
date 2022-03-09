import { RiMenuLine as HamburgerMenuIcon } from 'react-icons/ri';

import { useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '@contexts/SidebarDrawerContext';

import type {
   IconButtonProps,
   IconProps,
   BoxProps, //
} from '@chakra-ui/react';
import {
   IconButton,
   Icon,
   Box, //
} from '@chakra-ui/react';

import type { LimitedContainerStyleProps } from '@c-atoms/LimitedContainer';
import LimitedContainer from '@c-atoms/LimitedContainer';
import type { SearchBarStyleProps } from '@c-atoms/SearchBar';
import SearchBar from '@c-atoms/SearchBar';

import type { LogoStyleProps } from '@c-molecules/Logo';
import Logo from '@c-molecules/Logo';

import type { UserActionsStyleProps } from '@c-organisms/UserActions';
import UserActions from '@c-organisms/UserActions';

import type { OmitDistributive } from '@~types/omitDistributive';

export default Header;
export type { Props as HeaderProps };

type StyleProps = LimitedContainerStyleProps;
type Props = OmitDistributive<StyleProps, 'as' | 'children'>;

function Header(props: Props) {
   const { onOpen } = useSidebarDrawer();

   const isSmallVersion = useBreakpointValue({ base: true, md: false });
   const isMediumVersion = useBreakpointValue({ base: true, lg: false });

   return (
      <LimitedContainer {...headerStyles} {...props} as='header'>
         <IconButton
            {...hamburgerMenuStyles}
            icon={<Icon as={HamburgerMenuIcon} />}
            onClick={onOpen}
            hidden={!isMediumVersion}
            aria-label='Abrir Barra Lateral'
         />

         <Box {...logoBoxStyles}>
            <Logo
               {...logoStyles}
               to='/dashboard'
               title='Voltar para o dashboard'
            />
         </Box>

         <SearchBar
            {...searchBarStyles}
            hidden={isMediumVersion} //
         />
         <UserActions
            {...userActionsStyles}
            hideProfileInfo={isSmallVersion}
            name='Ruan Moreira'
            email='ruan_moreira@email.dev'
            avatarUrl='//github.com/ruanmoreiraofc.png'
         />
      </LimitedContainer>
   );
}

const headerStyles: StyleProps = {
   h: '20',
   pt: '4',
   align: 'center',
   justify: { base: 'space-between', lg: 'unset' },
   gap: { base: '4', md: '8' },
};

const hamburgerMenuStyles: Partial<IconButtonProps> = {
   fontSize: '24',
   variant: 'unstyled',
};

const logoBoxStyles: BoxProps = {
   mr: { lg: '36' },
};

const logoStyles: LogoStyleProps = {};

const searchBarStyles: SearchBarStyleProps = {};

const userActionsStyles: UserActionsStyleProps = {
   ml: 'auto',
};
