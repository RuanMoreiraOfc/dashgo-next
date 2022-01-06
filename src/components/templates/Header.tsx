import type {
   BoxProps, //
} from '@chakra-ui/react';
import {
   Box, //
} from '@chakra-ui/react';

import type { LimitedContainerStyleProps } from '@c-atoms/LimitedContainer';
import LimitedContainer from '@c-atoms/LimitedContainer';

import type { LogoStyleProps } from '@c-molecules/Logo';
import Logo from '@c-molecules/Logo';
import type { SearchBarStyleProps } from '@c-molecules/SearchBar';
import SearchBar from '@c-molecules/SearchBar';

import type { UserActionsStyleProps } from '@c-organisms/UserActions';
import UserActions from '@c-organisms/UserActions';

export default Header;
export type { Props as HeaderProps };

type StyleProps = LimitedContainerStyleProps;
type Props = Omit<StyleProps, 'as' | 'children'>;

function Header(props: Props) {
   return (
      <LimitedContainer {...headerStyles} {...props} as='header'>
         <Box {...logoBoxStyles}>
            <Logo
               {...logoStyles}
               to='/dashboard'
               title='Voltar para o dashboard'
            />
         </Box>

         <SearchBar {...searchBarStyles} />

         <UserActions
            {...userActionsStyles}
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
};

const logoBoxStyles: BoxProps = {
   w: '64',
   mr: '6',
};

const logoStyles: LogoStyleProps = {};

const searchBarStyles: SearchBarStyleProps = {};

const userActionsStyles: UserActionsStyleProps = {
   pl: '8',
   ml: 'auto',
};
