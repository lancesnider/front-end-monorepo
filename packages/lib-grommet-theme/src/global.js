const baseSpacing = 1;

export default {
  colors: {
    darkGrey: '#5c5c5c',
    teal: '#00979d',
    lightTeal: '#addde0',
    gold: '#f0b200',
    lightGold: '#f6d885',
    tomato: '#e45950',
    lightGrey: '#eff2f5',
    midGrey: '#a6a7a9',
    green: '#078f52',
    darkTeal: '#005D69',

    text: '#444444',
  },
  edgeSize: {
    none: '0',
    xsmall: `${baseSpacing / 4}rem`,
    small: `${baseSpacing / 2}rem`,
    medium: `${baseSpacing}rem`,
    large: `${baseSpacing * 2}rem`,
    xlarge: `${baseSpacing * 4}rem`,
    narrow: {
      none: '0',
      xsmall: `${baseSpacing / 8}rem`,
      small: `${baseSpacing / 4}rem`,
      medium: `${baseSpacing / 2}rem`,
      large: `${baseSpacing}rem`,
      xlarge: `${baseSpacing * 2}rem`,
    },
  },
  font: {
    family: "'Karla', Arial, sans-serif",
    face: `
      @font-face {
        font-family: 'Karla';
        font-style: normal;
        font-weight: 400;
        src:
          local('Karla'),
          local('Karla-Regular'),
          url(https://fonts.gstatic.com/s/karla/v6/qkBbXvYC6trAT7RVLtyU5rZP.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Karla';
        font-style: normal;
        font-weight: 700;
        src:
          local('Karla Bold'),
          local('Karla-Bold'),
          url(https://fonts.gstatic.com/s/karla/v6/qkBWXvYC6trAT7zuC8m5xLtlmgzD.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `,
  },
};
