import { RiPencilLine as EditIcon } from 'react-icons/ri';

import type {
   TableBodyProps,
   TableRowProps,
   TableCellProps,
   CheckboxProps,
   BoxProps,
   TextProps,
   ButtonProps,
   IconProps, //
} from '@chakra-ui/react';
import {
   Tbody,
   Tr,
   Td,
   Checkbox,
   Box,
   Text,
   Button,
   Icon, //
} from '@chakra-ui/react';

import type { PickRequired } from '@~types/pickRequired';

export default TableBodyUserList;
export type {
   Props as TableBodyUserListProps,
   StyleProps as TableBodyUserListStyleProps, //
};

type TableData = {
   isChecked?: boolean;
   handleToggle?: () => void;
   name: string;
   email: string;
   created_at: string;
};

type StyleProps = {
   data?: TableData[];
   hideExtraColumns?: boolean | { date?: boolean; miscellaneous?: boolean };
} & TableBodyProps;
type Props = PickRequired<StyleProps, 'data'>;

function TableBodyUserList({ data, hideExtraColumns, ...restProps }: Props) {
   return (
      <Tbody {...tableBodyUserListStyles} {...restProps}>
         {data.map(
            ({ isChecked, handleToggle, name, email, created_at }, i) => (
               <Tr key={email}>
                  <Td>
                     <Checkbox
                        {...checkboxStyles}
                        isChecked={isChecked}
                        onChange={handleToggle}
                     />
                  </Td>
                  <Td pr='0'>
                     <Box>
                        <Text {...nameStyles}>{name}</Text>
                        <Text {...emailStyles}>{email}</Text>
                     </Box>
                  </Td>
                  <Td
                     hidden={
                        typeof hideExtraColumns === 'boolean'
                           ? hideExtraColumns
                           : hideExtraColumns?.date
                     }
                  >
                     {created_at}
                  </Td>
                  <Td
                     hidden={
                        typeof hideExtraColumns === 'boolean'
                           ? hideExtraColumns
                           : hideExtraColumns?.miscellaneous
                     }
                  >
                     <Button
                        {...editButtonStyles}
                        leftIcon={<Icon fontSize='16' as={EditIcon} />}
                     >
                        Editar
                     </Button>
                  </Td>
               </Tr>
            ),
         )}
      </Tbody>
   );
}

const tableBodyUserListStyles: StyleProps = {};

const checkboxStyles: CheckboxProps = {
   colorScheme: 'pink',
};

const nameStyles: TextProps = {
   fontWeight: 'bold',
};

const emailStyles: TextProps = {
   color: 'gray.300',
   fontSize: 'sm',
};

const editButtonStyles: ButtonProps = {
   size: 'sm',
   fontSize: 'sm',
   colorScheme: 'green',
};
