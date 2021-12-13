import type { InputProps } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default LabeledInput;
export type { Props as LabeledInputProps };

type Props = {
   label?: string;
} & (InputProps & Required<Pick<InputProps, 'type' | 'name'>>);

function LabeledInput({ label, ...restProps }: Props) {
   return (
      <FormControl>
         {label && <FormLabel>{label}</FormLabel>}

         <Input {...inputStyles} {...restProps} />
      </FormControl>
   );
}

const inputStyles: InputProps = {
   size: 'lg',
   variant: 'filled',
   bgColor: 'gray.900',
   focusBorderColor: 'pink.500',
   _hover: {
      bgColor: 'disabled',
   },
};
