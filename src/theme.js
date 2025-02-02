import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#32B992',  // Primary color
      200: '#AF8A64',  // Secondary color
      300: '#FF9500',  // Accent color
      400: '#ECEBEB',  // Background color, corrected the typo
      500: '#383838',  // Text color
    },
  },
  components: {
    Button: {
      variants: {
        // Define custom variants here if necessary
      },
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'brand.400'// changed this to gray.100 from brand.400and I swear it looks better but idk could be wrong
      },
      // Add styles for other elements if needed
    },
  },
});
export default theme;
