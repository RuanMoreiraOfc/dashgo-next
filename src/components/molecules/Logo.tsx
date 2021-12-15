import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import type { LinkStyleProps } from '@c-atoms/Link';
import Link from '@c-atoms/Link';

import type { PickRequired } from '@~types/pickRequired';

export default Logo;
export type {
   Props as LogoProps,
   StyleProps as LogoStyleProps, //
};

type StyleProps = LinkStyleProps;
type Props = PickRequired<StyleProps, 'to' | 'title'>;

function Logo(props: Props) {
   return (
      <Link {...linkStyles} {...props}>
         <Text {...logoStyles} as='span'>
            dashgo
            <Text {...logoDetailStyles} as='span'>
               .
            </Text>
         </Text>
      </Link>
   );
}

const linkStyles: LinkStyleProps = {};

const logoStyles: TextProps = {
   fontSize: '3xl',
   fontWeight: 'bold',
   letterSpacing: 'tight',
   userSelect: 'none',
};

const logoDetailStyles: TextProps = {
   pl: '1',
   color: 'pink.500',
};
