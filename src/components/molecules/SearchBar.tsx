import { RiSearchLine as SearchIcon } from 'react-icons/ri';

import type {
   FlexProps,
   InputProps,
   IconProps, //
} from '@chakra-ui/react';
import {
   Flex,
   Input,
   Icon, //
} from '@chakra-ui/react';

export default SearchBar;
export type {
   Props as SearchBarProps,
   StyleProps as SearchBarStyleProps, //
};

type StyleProps = FlexProps;
type Props = StyleProps;

function SearchBar(props: Props) {
   return (
      <Flex {...searchBarStyles} {...props} as='label'>
         <Input {...searchBarInputStyles} placeholder='Buscar na plataforma' />

         <Icon {...searchBarIconStyles} as={SearchIcon} />
      </Flex>
   );
}

const searchBarStyles: StyleProps = {
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
