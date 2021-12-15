import { Fragment } from 'react';
import Head from 'next/head';

import type {
   FlexProps,
   StackProps,
   ButtonProps, //
} from '@chakra-ui/react';
import {
   Flex,
   Stack,
   Button, //
} from '@chakra-ui/react';

import type { LabeledInputStyleProps } from '@c-atoms/LabeledInput';
import LabeledInput from '@c-atoms/LabeledInput';

export default SignIn;

function SignIn() {
   return (
      <Fragment>
         <Head>
            <title>Entrar | dashgo</title>
         </Head>

         <Flex {...pageStyles}>
            <Flex {...formStyles} as='form'>
               <Stack {...formStackStyles}>
                  <LabeledInput
                     {...formEmailInputStyles}
                     label='Email'
                     type='email'
                     name='email'
                  />

                  <LabeledInput
                     {...formPasswordInputStyles}
                     label='Senha'
                     type='password'
                     name='password'
                  />

                  <Button {...formButtonStyles}>Entrar</Button>
               </Stack>
            </Flex>
         </Flex>
      </Fragment>
   );
}

const pageStyles: FlexProps = {
   w: '100vw',
   h: '100vh',
   align: 'center',
   justify: 'center',
};

const formStyles: FlexProps = {
   maxW: 360,
   w: '100%',
   p: '8',
   borderRadius: 8,
   bg: 'gray.800',
   flexDir: 'column',
};

const formStackStyles: StackProps = {
   spacing: '4',
};

const formEmailInputStyles: LabeledInputStyleProps = {};

const formPasswordInputStyles: LabeledInputStyleProps = {};

const formButtonStyles: ButtonProps = {
   type: 'submit',
   size: 'lg',
   mt: '6',
   colorScheme: 'pink',
};
