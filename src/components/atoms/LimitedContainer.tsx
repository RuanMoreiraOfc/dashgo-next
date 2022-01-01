import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { PickRequired } from '@~types/pickRequired';

export default LimitedContainer;
export type {
   Props as LimitedContainerProps,
   StyleProps as LimitedContainerStyleProps, //
};

type StyleProps = {
   variant?: 'container' | 'wrapper';
} & FlexProps;

type Props = PickRequired<StyleProps, 'as'>;

function LimitedContainer({ variant = 'container', ...restProps }: Props) {
   const styles =
      variant === 'container' ? limitedContainerStyles : limitedWrapperStyles;

   return <Flex {...styles} {...restProps} />;
}

const commonStyles: StyleProps = {
   maxW: 1480,
   w: '100%',
};

const limitedContainerStyles: StyleProps = {
   ...commonStyles,
   mx: 'auto',
   px: '6',
};

const limitedWrapperStyles: StyleProps = {
   ...commonStyles,
};
