import { useState, useEffect, useCallback } from 'react';

import type { TableProps } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react';

import TableHeadUserList from '@c-molecules/TableHeadUserList';
import type { TableBodyUserListStyleProps } from '@c-molecules/TableBodyUserList';
import TableBodyUserList from '@c-molecules/TableBodyUserList';

import type { PickRequired } from '@~types/pickRequired';

export default TableUserList;
export type {
   Props as TableUserListProps,
   StyleProps as TableUserListStyleProps, //
};

type StyleProps = Pick<TableBodyUserListStyleProps, 'data'> & TableProps;
type Props = PickRequired<StyleProps, 'data'>;

function TableUserList({ data, ...restProps }: Props) {
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
      <Table {...tableUserListStyles} {...restProps}>
         <TableHeadUserList
            isChecked={isHeadChecked}
            handleToggle={ToggleAll}
         />
         <TableBodyUserList
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

const tableUserListStyles: StyleProps = {
   gap: '8',
};
