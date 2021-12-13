import { Fragment } from 'react';
import Head from 'next/head';

import { Flex, Stack, Button } from '@chakra-ui/react';

import LabeledInput from '@c-atoms/LabeledInput';

export default SignIn;

function SignIn() {
   return (
      <Fragment>
         <Head>
            <title>Entrar | Dashgo</title>
         </Head>

         <Flex
            w='100vw'
            h='100vh'
            align='center'
            justify='center' //
         >
            <Flex
               as='form'
               maxW={360}
               w='100%'
               p='8'
               borderRadius={8}
               bg='gray.800'
               flexDir='column'
            >
               <Stack spacing='4'>
                  <LabeledInput
                     label='Email'
                     type='email'
                     name='email' //
                  />

                  <LabeledInput
                     label='Senha'
                     type='password'
                     name='password' //
                  />

                  <Button
                     type='submit'
                     size='lg'
                     mt='6'
                     colorScheme='pink' //
                  >
                     Entrar
                  </Button>
               </Stack>
            </Flex>
         </Flex>
      </Fragment>
   );
}
