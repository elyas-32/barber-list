'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {

    MuiCssBaseline: {
      styleOverrides: `
        ul,li {
          list-style:none;
          margin:0;
          padding:0;
        }
      `,
    },
  },
  cssVariables: true
});

export default theme;
