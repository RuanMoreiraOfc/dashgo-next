import { RiAddLine as AddNewIcon } from 'react-icons/ri';

import { Fragment } from 'react';
import Head from 'next/head';

import type {
   BoxProps,
   ButtonProps,
   FlexProps,
   HeadingProps, //
} from '@chakra-ui/react';
import {
   Box,
   Button,
   Flex,
   Heading,
   Icon, //
} from '@chakra-ui/react';

import Link from '@c-atoms/Link';

import TableUserList from '@c-organisms/TableUserList';
import type { PaginationStyleProps } from '@c-organisms/Pagination';
import Pagination from '@c-organisms/Pagination';

export default ListUser;

function ListUser() {
   return (
      <Fragment>
         <Head>
            <title>Listagem de usuários | dashgo</title>
         </Head>

         <Box {...pageStyles}>
            <Flex {...headerStyles}>
               <Heading {...headerHeadingStyles}>Usuários</Heading>
               <Button
                  {...headerButtonStyles}
                  leftIcon={<Icon as={AddNewIcon} />}
                  as={Link}
                  to='/users/create'
               >
                  Criar novo
               </Button>
            </Flex>

            <TableUserList
               data={[
                  {
                     name: 'Ruan Moreira',
                     email: 'ruan_moreira@email.dev',
                     created_at: '4 de Janeiro de 2022',
                  },
                  {
                     name: 'Diego Fernandes',
                     email: 'diego.schell.f@gmail.com',
                     created_at: '5 de Janeiro de 2022',
                  },
               ]}
            />

            <Pagination
               {...paginationStyles}
               goto='/users'
               maxItems={1}
               currentPage={1}
               maxPage={1}
            />
         </Box>
      </Fragment>
   );
}

const pageStyles: BoxProps = {
   w: '100%',
   p: { base: '6', md: '8' },
   borderRadius: 8,
   bg: 'gray.800',
   flex: '1',
};

const headerStyles: FlexProps = {
   mb: '8',
   align: 'center',
   justify: 'space-between',
};

const headerHeadingStyles: HeadingProps = {
   size: 'lg',
   fontWeight: 'normal',
};

const headerButtonStyles: ButtonProps = {
   size: 'sm',
   fontSize: 'sm',
   colorScheme: 'pink',
};

const paginationStyles: PaginationStyleProps = {
   mt: '8',
};
