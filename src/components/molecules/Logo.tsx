import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import type { LinkProps } from '@c-atoms/Link';
import Link from '@c-atoms/Link';

export default Logo;
export type { Props as LogoProps };

type Props = Required<Pick<LinkProps, 'to' | 'title'>>;

function Logo(props: Props) {
   return (
      <Link {...linkStyles} {...props}>
         <Text {...logoStyles}>
            dashgo
            <Text {...logoDetailStyles}>.</Text>
         </Text>
      </Link>
   );
}

const linkStyles: Partial<LinkProps> = {};

const logoStyles: TextProps = {
   as: 'span',
   fontSize: '3xl',
   fontWeight: 'bold',
   letterSpacing: 'tight',
   userSelect: 'none',
};

const logoDetailStyles: TextProps = {
   as: 'span',
   pl: '1',
   color: 'pink.500',
};
