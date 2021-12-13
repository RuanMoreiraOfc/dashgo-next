import Head from 'next/head';

import {
   Flex,
   Stack,
   FormControl,
   FormLabel,
   Input,
   Button,
} from '@chakra-ui/react';

export default Home;

function Home() {
   return (
      <div>
         <Head>
            <title>Home | Dashgo</title>
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
                  <FormControl>
                     <FormLabel>Email</FormLabel>
                     <Input
                        type='email'
                        name='email'
                        variant='filled'
                        size='lg'
                        bgColor='gray.900'
                        focusBorderColor='pink.500'
                        _hover={{
                           bgColor: 'disable',
                        }}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>Password</FormLabel>
                     <Input
                        type='password'
                        name='password'
                        size='lg'
                        variant='filled'
                        bgColor='gray.900'
                        focusBorderColor='pink.500'
                        _hover={{
                           bgColor: 'disable',
                        }}
                     />
                  </FormControl>
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
      </div>
   );
}
