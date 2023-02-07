import { extendTheme } from '@chakra-ui/react';

const BreakpointConfig = {
  breakpoints: {
    xs: '320px', // mobile
    sm: '480px',
    md: '768px', // tablet
    lg: '992px',
    xl: '1280px', // desktop
    '2xl': '1600px'
  }
};

const ColorConfig = {
  colors: {
    text: { 1: '#292D32', 2: '#828282' },
    main: { 1: '#1E1E2D', 2: '#1A1A27' }
  }
};

const FontConfig = {
  fonts: {
    heading: `'Quicksand', sans-serif`
  }
};

export const chakraTheme = extendTheme({
  // ...ComponentsTheme,
  ...FontConfig,
  ...ColorConfig,
  ...BreakpointConfig
  // ...MiscConfig,
  // ...GlobalConfig
});
