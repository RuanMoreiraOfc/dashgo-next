import { Fragment } from 'react';
import Head from 'next/head';

import type {
   BoxProps,
   HeadingProps,
   DividerProps,
   StackProps,
   SimpleGridProps,
   FlexProps,
   ButtonProps, //
} from '@chakra-ui/react';
import {
   Box,
   Heading,
   Divider,
   Stack,
   SimpleGrid,
   Flex,
   HStack,
   Button, //
} from '@chakra-ui/react';

import LabeledInput from '@c-atoms/LabeledInput';

export default CreateUser;

function CreateUser() {
   return (
      <Fragment>
         <Head>
            <title>Listagem de usuários | dashgo</title>
         </Head>

         <Box {...pageStyles}>
            <Heading {...headingStyles}>Criar Usuário</Heading>

            <Divider {...dividerStyles} />

            <Stack {...fieldSetStyles} as='fieldset'>
               <SimpleGrid {...fieldSetGroupStyles}>
                  <LabeledInput
                     label='Nome Completo'
                     type='text'
                     name='name' //
                  />
                  <LabeledInput
                     label='E-mail'
                     type='email'
                     name='email' //
                  />
               </SimpleGrid>
               <SimpleGrid {...fieldSetGroupStyles}>
                  <LabeledInput
                     label='Senha'
                     type='password'
                     name='password' //
                  />
                  <LabeledInput
                     label='Confirme a senha'
                     type='password'
                     name='password_confirmation'
                  />
               </SimpleGrid>
            </Stack>

            <Flex {...actionsBoxStyles}>
               <HStack {...actionsBoxContainerStyles}>
                  <Button {...cancelButtonStyles}>Cancelar</Button>
                  <Button {...proceedButtonStyles}>Criar</Button>
               </HStack>
            </Flex>
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

const headingStyles: HeadingProps = {
   size: 'lg',
   fontWeight: 'normal',
};

const dividerStyles: DividerProps = {
   my: '6',
   borderColor: 'gray.700',
};

const fieldSetStyles: StackProps = {
   spacing: { base: '6', md: '8' },
};

const fieldSetGroupStyles: SimpleGridProps = {
   w: '100%',
   spacing: { base: '6', md: '8' },
   minChildWidth: '240px',
};

const actionsBoxStyles: FlexProps = {
   mt: '8',
   justify: 'flex-end',
};

const actionsBoxContainerStyles: SimpleGridProps = {
   spacing: '4',
};

const cancelButtonStyles: ButtonProps = {
   colorScheme: 'whiteAlpha',
};

const proceedButtonStyles: ButtonProps = {
   colorScheme: 'pink',
};
