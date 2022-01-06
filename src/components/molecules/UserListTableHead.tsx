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

export default UserListTableHead;
export type {
   Props as UserListTableHeadProps,
   StyleProps as UserListTableHeadStyleProps, //
};

type StyleProps = {
   isChecked?: boolean;
   handleToggle?: () => void;
} & TableHeadProps;
type Props = PickRequired<StyleProps, 'handleToggle'>;

function UserListTableHead({ isChecked, handleToggle, ...restProps }: Props) {
   return (
      <Thead {...userListTableHeadStyles} {...restProps}>
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
            <Th>Data de cadastro</Th>
            <Th width='8'></Th>
         </Tr>
      </Thead>
   );
}

const userListTableHeadStyles: StyleProps = {};
