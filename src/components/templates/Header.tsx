import { useBreakpointValue } from '@chakra-ui/react';

import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import type { LimitedContainerStyleProps } from '@c-atoms/LimitedContainer';
import LimitedContainer from '@c-atoms/LimitedContainer';
import type { SearchBarStyleProps } from '@c-atoms/SearchBar';
import SearchBar from '@c-atoms/SearchBar';

import type { LogoStyleProps } from '@c-molecules/Logo';
import Logo from '@c-molecules/Logo';

import type { UserActionsStyleProps } from '@c-organisms/UserActions';
import UserActions from '@c-organisms/UserActions';

export default Header;
export type { Props as HeaderProps };

type StyleProps = LimitedContainerStyleProps;
type Props = Omit<StyleProps, 'as' | 'children'>;

function Header(props: Props) {
   const isSmallVersion = useBreakpointValue({ base: true, md: false });
   const isMediumVersion = useBreakpointValue({ base: true, lg: false });

   return (
      <LimitedContainer {...headerStyles} {...props} as='header'>
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
   gap: '8',
};

const logoBoxStyles: BoxProps = {
   mr: { lg: '36' },
};

const logoStyles: LogoStyleProps = {};

const searchBarStyles: SearchBarStyleProps = {};

const userActionsStyles: UserActionsStyleProps = {
   ml: 'auto',
};
