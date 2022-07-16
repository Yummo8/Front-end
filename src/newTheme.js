//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createTheme } from '@material-ui/core/styles';

const newTheme = createTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#fafafa',
      secondary: '#e647e6',
      yellow: '#d19aff',
    },
    background: {
      default: '#121212',
      paper: '#171923',
    },
    primary: {
      light: '#ffe066',
      main: '#2c2560',
      dark: '#b38f00',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#930993',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#fff',
    },
  },
  typography: {
    color: '#2c2560',
    fontFamily: ['"monospace"', 'sans-serif'].join(','),
  },
});

export default newTheme;
