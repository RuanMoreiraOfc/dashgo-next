import type { FlexProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

import { PickRequired } from '@~types/pickRequired';

export default LimitedContainer;
export type { Props as LimitedContainerProps };

type Props = PickRequired<FlexProps, 'as'>;

function LimitedContainer(props: Props) {
   return <Flex {...limitedContainerStyles} {...props} />;
}

const limitedContainerStyles: FlexProps = {
   maxW: 1480,
   w: '100%',
};
