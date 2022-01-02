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

export default LinkListItemWithCaption;
export type {
   Props as LinkListItemWithCaptionProps,
   StyleProps as LinkListItemWithCaptionStyleProps, //
};

type StyleProps = {
   insideOf?: BoxProps['as'];
   caption?: string;
   linkListProps?: PickRequired<
      Omit<LinkStyleProps, 'insideOf'>,
      'to' | 'children'
   >[];
} & StackProps;
type Props = PickRequired<
   Omit<StyleProps, 'as' | 'children'>,
   'caption' | 'linkListProps'
>;

function LinkListItemWithCaption({
   insideOf,
   caption,
   linkListProps,
   ...restProps
}: Props) {
   const FinalComponent = () => (
      <Stack {...linkListItemWithCaptionStyles} as='ul'>
         <Text {...topicStyles} as='li'>
            {caption}
         </Text>
         <Box as='li'>
            <Stack {...listStyles} as='ul'>
               {linkListProps.map((linkProps, i) => (
                  <Link
                     key={linkProps.to}
                     {...linkStyles}
                     {...linkProps}
                     insideOf='li' //
                  />
               ))}
            </Stack>
         </Box>
      </Stack>
   );

   return insideOf !== undefined ? (
      <Box as={insideOf}>
         <FinalComponent />
      </Box>
   ) : (
      <FinalComponent />
   );
}

const linkListItemWithCaptionWrapperStyles: BoxProps = {};

const linkListItemWithCaptionStyles: StyleProps = {
   spacing: '6',
};

const topicStyles: TextProps = {
   color: 'gray.400',
   fontSize: 'small',
   fontWeight: 'bold',
   textTransform: 'uppercase',
};

const listStyles: StackProps = {
   spacing: '2',
};

const linkStyles: LinkStyleProps = {
   display: 'flex',
   gap: '4',
};
