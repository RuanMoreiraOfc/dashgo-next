import { useState, useEffect, useCallback } from 'react';

import type { TableProps } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';

import UserListTableHead from '@c-molecules/UserListTableHead';
import type { UserListTableBodyStyleProps } from '@c-molecules/UserListTableBody';
import UserListTableBody from '@c-molecules/UserListTableBody';

import type { PickRequired } from '@~types/pickRequired';

export default UserListTable;
export type {
   Props as UserListTableProps,
   StyleProps as UserListTableStyleProps, //
};

type StyleProps = Pick<UserListTableBodyStyleProps, 'data'> & TableProps;
type Props = PickRequired<StyleProps, 'data'>;

function UserListTable({ data, ...restProps }: Props) {
   const [isHeadChecked, setIsHeadChecked] = useState<boolean>();
   const [checkedList, setCheckedList] = useState<boolean[]>(
      Array.from(data, () => false),
   );

   useEffect(() => {
      if (isHeadChecked === undefined) {
         return;
      }

      // ----

      const _isAllSelected = checkedList.every((item) => item === true);

      if (
         (_isAllSelected && !isHeadChecked) ||
         (!_isAllSelected && isHeadChecked)
      ) {
         setIsHeadChecked((oldState) => !oldState);
         return;
      }
   }, [isHeadChecked, checkedList]);

   const ToggleAll = useCallback(() => {
      setIsHeadChecked((oldState) => !oldState);
      setCheckedList((oldState) => Array.from(oldState, () => !isHeadChecked));
   }, [isHeadChecked]);

   return (
      <Table {...userListTableStyles} {...restProps}>
         <UserListTableHead
            isChecked={isHeadChecked}
            handleToggle={ToggleAll}
         />
         <UserListTableBody
            data={checkedList.map((item, i) => ({
               ...data[i],
               isChecked: item,
               handleToggle: setCheckedList.bind(null, (oS) =>
                  Array.from(oS, (oSItem, oSI) =>
                     oSI === i ? !oSItem : oSItem,
                  ),
               ),
            }))}
         />
      </Table>
   );
}

const userListTableStyles: StyleProps = {
   gap: '8',
};
