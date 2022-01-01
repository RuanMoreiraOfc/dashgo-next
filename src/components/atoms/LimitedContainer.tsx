import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { PickRequired } from '@~types/pickRequired';

export default LimitedContainer;
export type {
   Props as LimitedContainerProps,
   StyleProps as LimitedContainerStyleProps, //
};

type StyleProps = FlexProps;

type Props = PickRequired<StyleProps, 'as'>;

function LimitedContainer(props: Props) {
   return <Flex {...limitedContainerStyles} {...props} />;
}

const limitedContainerStyles: StyleProps = {
   maxW: 1480,
   w: '100%',
   mx: 'auto',
   px: '6',
};
