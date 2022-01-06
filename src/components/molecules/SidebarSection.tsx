import type {
   StackProps,
   TextProps,
   BoxProps, //
} from '@chakra-ui/react';
import {
   Stack,
   Text,
   Box, //
} from '@chakra-ui/react';

import type { LinkStyleProps } from '@c-atoms/Link';
import Link from '@c-atoms/Link';

import type { PickRequired } from '@~types/pickRequired';

export default SidebarSection;
export type {
   Props as SidebarSectionProps,
   StyleProps as SidebarSetionStyleProps, //
};

type LinkListProps = {
   icon?: LinkStyleProps['leftIcon'];
} & PickRequired<
   Omit<LinkStyleProps, 'insideOf' | 'leftIcon' | 'rightIcon'>,
   'to' | 'children'
>;

type StyleProps = {
   insideOf?: BoxProps['as'];
   caption?: string;
   linkListProps?: LinkListProps[];
} & StackProps;
type Props = PickRequired<
   Omit<StyleProps, 'as' | 'children'>,
   'caption' | 'linkListProps'
>;

function SidebarSection({
   insideOf,
   caption,
   linkListProps,
   ...restProps
}: Props) {
   const FinalComponent = () => (
      <Stack {...sidebarSectionStyles} as='ul'>
         <Text {...topicStyles} as='li'>
            {caption}
         </Text>
         <Box as='li'>
            <Stack {...listStyles} as='ul'>
               {linkListProps.map(({ icon, ...linkProps }, i) => (
                  <Link
                     key={linkProps.to}
                     {...linkStyles}
                     {...linkProps}
                     insideOf='li'
                     leftIcon={icon}
                  />
               ))}
            </Stack>
         </Box>
      </Stack>
   );

   return insideOf !== undefined ? (
      <Box {...sidebarSectionWrapperStyles} as={insideOf}>
         <FinalComponent />
      </Box>
   ) : (
      <FinalComponent />
   );
}

const sidebarSectionWrapperStyles: BoxProps = {};

const sidebarSectionStyles: StyleProps = {
   spacing: '6',
};

const topicStyles: TextProps = {
   color: 'gray.400',
   fontSize: 'small',
   fontWeight: 'bold',
   textTransform: 'uppercase',
};

const listStyles: StackProps = {
   gap: '2',
};

const linkStyles: LinkStyleProps = {
   display: 'flex',
   gap: '4',
};
