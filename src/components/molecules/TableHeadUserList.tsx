import type {
   TableHeadProps,
   TableRowProps,
   TableColumnHeaderProps,
   CheckboxProps, //
} from '@chakra-ui/react';
import {
   Thead,
   Tr,
   Th,
   Checkbox, //
} from '@chakra-ui/react';

import type { PickRequired } from '@~types/pickRequired';

export default TableHeadUserList;
export type {
   Props as TableHeadUserListProps,
   StyleProps as TableHeadUserListStyleProps, //
};

type StyleProps = {
   isChecked?: boolean;
   hideExtraColumns?: boolean | { date?: boolean; miscellaneous?: boolean };
   handleToggle?: () => void;
} & TableHeadProps;
type Props = PickRequired<StyleProps, 'handleToggle'>;

function TableHeadUserList({
   isChecked,
   handleToggle,
   hideExtraColumns,
   ...restProps
}: Props) {
   return (
      <Thead {...tableHeadUserListStyles} {...restProps}>
         <Tr>
            <Th
               w='8'
               px='6'
               color='gray.300' //
            >
               <Checkbox
                  colorScheme='pink'
                  isChecked={isChecked}
                  onChange={handleToggle}
               />
            </Th>
            <Th>Usuário</Th>
            <Th
               hidden={
                  typeof hideExtraColumns === 'boolean'
                     ? hideExtraColumns
                     : hideExtraColumns?.date
               }
            >
               Data de cadastro
            </Th>
            <Th
               hidden={
                  typeof hideExtraColumns === 'boolean'
                     ? hideExtraColumns
                     : hideExtraColumns?.miscellaneous
               }
               width='8'
            ></Th>
         </Tr>
      </Thead>
   );
}

const tableHeadUserListStyles: StyleProps = {};
