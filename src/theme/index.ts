import {black, teal, grey, red, white, yellow, newNavy} from './colors';

const theme = {
  borderRadius: 13,
  color: {
    black,
    grey,
    yellow,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: teal[200],
    },
    white,
    teal,
    newNavy,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,
};

export default theme;
