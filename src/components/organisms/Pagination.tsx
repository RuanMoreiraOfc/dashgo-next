import type {
   StackProps,
   BoxProps,
   TextProps, //
} from '@chakra-ui/react';
import {
   Stack,
   Box,
   Text, //
} from '@chakra-ui/react';

import type {
   PaginationBarProps,
   PaginationBarStyleProps,
} from '@c-molecules/PaginationBar';
import PaginationBar from '@c-molecules/PaginationBar';

import type { PickRequired } from '@~types/pickRequired';

export default Pagination;
export type {
   Props as PaginationProps,
   StyleProps as PaginationStyleProps, //
};

type StyleProps = {
   maxItems?: number;
} & Pick<PaginationBarStyleProps, 'goto' | 'currentPage' | 'maxPage'> &
   StackProps;
type Props = PickRequired<
   StyleProps,
   'goto' | 'maxItems' | 'currentPage' | 'maxPage'
>;

function Pagination({
   goto,
   maxItems,
   currentPage,
   maxPage,
   ...restProps
}: Props) {
   const maxItemsPerPage = Math.ceil(maxItems / maxPage);
   const maxItemsLastPage = Math.floor(maxPage * ((maxItems / maxPage) % 1));

   const startPoint = maxItemsPerPage * (currentPage - 1) + 1;
   const endPoint =
      currentPage < maxPage ? maxItemsPerPage * currentPage : maxItems;

   return (
      <Stack {...paginationStyles} {...restProps}>
         <Box>
            <Text>
               <Text as='strong'>{startPoint}</Text>
               {/* */} - {/* */}
               <Text as='strong'>{endPoint}</Text>
               {/* */} de {/* */}
               <Text as='strong'>{maxItems}</Text>
            </Text>
         </Box>

         <PaginationBar {...{ goto, currentPage, maxPage }} />
      </Stack>
   );
}

const paginationStyles: StyleProps = {
   w: '100%',
   flexDir: { base: 'column', md: 'row' },
   align: 'center',
   justify: 'space-between',
};
