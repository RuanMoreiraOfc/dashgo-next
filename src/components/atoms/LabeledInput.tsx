import type {
   FormControlProps,
   FormLabelProps,
   InputProps, //
} from '@chakra-ui/react';
import {
   FormControl,
   FormLabel,
   Input, //
} from '@chakra-ui/react';

import type { PickRequired } from '@~types/pickRequired';

export default LabeledInput;
export type {
   Props as LabeledInputProps,
   StyleProps as LabeledInputStyleProps,
};

type StyleProps = {
   label?: string;
} & InputProps;

type Props = PickRequired<StyleProps, 'type' | 'name'>;

function LabeledInput({ label, ...restProps }: Props) {
   return (
      <FormControl {...controlStyles}>
         {label && <FormLabel {...labelStyles}>{label}</FormLabel>}

         <Input {...inputStyles} {...restProps} />
      </FormControl>
   );
}

const controlStyles: FormControlProps = {};

const labelStyles: FormLabelProps = {};

const inputStyles: StyleProps = {
   size: 'lg',
   variant: 'filled',
   bgColor: 'gray.900',
   focusBorderColor: 'gray.900',
   _hover: {
      bgColor: 'disabled',
   },
};
