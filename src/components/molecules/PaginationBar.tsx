import type { StackProps, ButtonProps } from '@chakra-ui/react';
import { HStack, Button } from '@chakra-ui/react';

import type { LinkStyleProps } from '@c-atoms/Link';
import Link from '@c-atoms/Link';

import type { PickRequired } from '@~types/pickRequired';

export default PaginationBar;
export type {
   Props as PaginationBarProps,
   StyleProps as PaginationBarStyleProps, //
};

type StyleProps = {
   goto?: LinkStyleProps['to'];
   currentPage?: number;
   maxPage?: number;
} & StackProps;
type Props = PickRequired<StyleProps, 'goto' | 'currentPage' | 'maxPage'>;

function PaginationBar({ goto, currentPage, maxPage, ...restProps }: Props) {
   return (
      <HStack {...paginationBarStyles} {...restProps}>
         {Array.from({ length: maxPage }, (_, _i) => {
            const index = _i + 1;
            const isCurrentPage = currentPage === index;

            // ---

            const linkProps = isCurrentPage
               ? {}
               : { as: Link, to: `${goto}/${index}` };

            const occasionalStyles = isCurrentPage
               ? linkDisabledStyles
               : linkStyles;

            return (
               <Button
                  {...occasionalStyles}
                  {...linkProps}
                  key={index}
                  isDisabled={isCurrentPage}
               >
                  {index}
               </Button>
            );
         })}
      </HStack>
   );
}

const paginationBarStyles: StyleProps = {};

const linkStyles: ButtonProps = {
   size: 'sm',
   fontSize: 'xs',
   width: '4',
   bgColor: 'gray.700',
   _hover: {
      bgColor: 'gray.500',
   },
};

const linkDisabledStyles: ButtonProps = {
   ...linkStyles,
   colorScheme: 'pink',
   _disabled: {
      bgColor: 'pink.500',
      cursor: 'not-allowed',
   },
};
