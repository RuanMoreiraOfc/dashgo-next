import type { IconType } from 'react-icons';
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
import type { OmitDistributive } from '@~types/omitDistributive';

export default Link;
export type {
   Props as LinkProps,
   StyleProps as LinkStyleProps, //
};

type StyleProps = {
   to?: string;
   hideExternalIcon?: true;
   selfExternal?: boolean;
   insideOf?: ChakraLinkProps['as'];
   leftIcon?: IconType;
   rightIcon?: IconType;
} & OmitDistributive<ChakraLinkProps, 'href' | 'as'>;
type Props = PickRequired<StyleProps, 'to'>;

function Link({
   children,
   to,
   selfExternal,
   hideExternalIcon,
   leftIcon,
   rightIcon,
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
   const linkProps: OmitDistributive<ChakraLinkProps, 'href'> = {
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
            {leftIcon && <Icon as={leftIcon} />}
            {children}
            {rightIcon !== undefined ? (
               <Icon as={rightIcon} />
            ) : (
               !hideExternalIcon &&
               isExternal && (
                  <Box
                     {...iconWrapperStyles}
                     ml={'-' + (linkProps.rowGap ?? linkProps.gap)}
                     as='span'
                  >
                     <Icon {...externalIconStyles} as={ExternalLinkIcon} />
                  </Box>
               )
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

const externalIconStyles: IconProps = {
   ml: '1',

   fontSize: '1.25em',

   display: 'inline',
};
