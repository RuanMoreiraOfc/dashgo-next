import { RiSearchLine } from 'react-icons/ri';

import type {
   BoxProps,
   FlexProps,
   InputProps,
   IconProps,
   StackProps,
   TextProps,
   AvatarProps,
} from '@chakra-ui/react';
import {
   Box,
   Flex,
   Input,
   Icon,
   HStack,
   Text,
   Avatar, //
} from '@chakra-ui/react';

import type { LimitedContainerStyleProps } from '@c-atoms/LimitedContainer';
import LimitedContainer from '@c-atoms/LimitedContainer';

import type { LogoStyleProps } from '@c-molecules/Logo';
import Logo from '@c-molecules/Logo';

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

         <Flex {...searchBarStyles} as='label'>
            <Input
               {...searchBarInputStyles}
               placeholder='Buscar na plataforma'
            />

            <Icon {...searchBarIconStyles} as={RiSearchLine} />
         </Flex>

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

const searchBarStyles: FlexProps = {
   maxW: 400,
   px: '8',
   py: '4',
   borderRadius: 'full',
   bg: 'gray.800',
   color: 'gray.200',
   flex: '1',
   alignSelf: 'center',
   gap: '4',
   position: 'relative',
   _focusWithin: {
      outlineStyle: 'auto',
   },
};

const searchBarInputStyles: InputProps = {
   variant: 'unstyled',
   px: '4',
   outline: 'unset',
   color: 'gray.50',
   _placeholder: {
      color: 'gray.400',
   },
};

const searchBarIconStyles: IconProps = {};

const userActionsStyles: UserActionsStyleProps = {
   pl: '8',
   ml: 'auto',
};
