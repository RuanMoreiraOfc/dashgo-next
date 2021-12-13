import { extendTheme } from '@chakra-ui/react';

export { theme };

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
