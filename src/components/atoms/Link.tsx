import { MdOpenInNew as ExternalLinkIcon } from 'react-icons/md';

import NextLink from 'next/link';

import type {
   BoxProps,
   LinkProps as ChakraLinkProps,
   IconProps, //
} from '@chakra-ui/react';
import {
   Box,
   Link as ChakraLink,
   Icon, //
} from '@chakra-ui/react';

import type { PickRequired } from '@~types/pickRequired';

export default Link;
export type {
   Props as LinkProps,
   StyleProps as LinkStyleProps, //
};

type StyleProps = {
   to?: string;
   noIcon?: true;
   selfExternal?: boolean;
   insideOf?: ChakraLinkProps['as'];
} & Omit<ChakraLinkProps, 'href' | 'as'>;

type Props = PickRequired<StyleProps, 'to'>;

function Link({
   children,
   to,
   selfExternal,
   noIcon,
   insideOf,
   ...restLinkProps //
}: Props) {
   if (
      to.startsWith('http:') ||
      (to.startsWith('//') && !to.startsWith('//www.'))
   ) {
      throw new Error("Don't use external links without https protocol!");
   }

   const isExternal =
      to.startsWith('tel:') ||
      to.startsWith('mailto:') ||
      to.startsWith('https://');

   const isForeign = isExternal && !selfExternal;
   const linkProps: Omit<ChakraLinkProps, 'href'> = {
      target: isExternal ? '_blank' : undefined,
      rel:
         Object.entries({
            nofollow: isForeign,
            external: isExternal,
            noopener: isExternal,
            noreferrer: isForeign,
         })
            .filter(([_, value]) => value === true)
            .map(([key]) => key)
            .join(' ') || undefined,

      ...restLinkProps,
   };

   // ***

   const FinalLinkComponent = () => (
      <NextLink href={to} passHref>
         <ChakraLink {...linkStyles} {...linkProps}>
            {children}
            {!noIcon && isExternal && (
               <Box
                  {...iconWrapperStyles}
                  ml={'-' + (linkProps.rowGap ?? linkProps.gap)}
                  as='span'
               >
                  <Icon {...iconStyles} as={ExternalLinkIcon} />
               </Box>
            )}
         </ChakraLink>
      </NextLink>
   );

   return insideOf !== undefined ? (
      <Box {...linkWrapperStyles} as={insideOf}>
         <FinalLinkComponent />
      </Box>
   ) : (
      <FinalLinkComponent />
   );
}

const linkWrapperStyles: BoxProps = {};

const linkStyles: ChakraLinkProps = {
   display: 'inline-block',
   color: 'inherit',
   _hover: {
      textDecor: 'disabled',
   },
};

const iconWrapperStyles: BoxProps = {};

const iconStyles: IconProps = {
   ml: '1',

   fontSize: '1.25em',

   display: 'inline',
};
