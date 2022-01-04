import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

import { RecursivePartial } from '@~types/recursivePartial';

export { theme };

type DefaultThemeType = RecursivePartial<typeof defaultTheme>;

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        outline: false,
        _focus: {
          boxShadow: false,
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          outline: false,
        },
      },
    },
    Link: {
      baseStyle: {
        outline: false,
        _focus: {
          boxShadow: false,
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          outlineOffset: 7,
          transitionDuration: false,
          transitionProperty: false,
          _focus: {
            outlineOffset: 2,
            outlineStyle: 'auto',
            boxShadow: false,
          },
        },
      },
    },
  },
  transition: {
    property: {
      common: defaultTheme.transition.property.common + ', outline-offset',
    },
  },
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      '*': {
        outline: 'auto',
        outlineStyle: 'unset',
        outlineOffset: 5,

        transitionDuration: '200ms',

        ':focus, :focus-visible, :focus-within': {
          outlineOffset: 0,
        },

        _focusVisible: {
          outlineStyle: 'auto',
        },
      },
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
      svg: {
        fontSize: '20',
      },
      nav: {
        display: 'contents',
      },
      ul: {
        listStyle: 'none',

        display: 'contents',
      },
      li: {
        listStyle: 'none',
      },
    },
  },
} as DefaultThemeType);
