import { tokens } from '@eevee/react-theme';

export const CustomTheme = {
  // colors: {
  //   surface1: '#011627',
  //   surface2: '#243b4c',
  //   surface3: '#112331',
  //   clickable: '#6988a1',
  //   base: '#808080',
  //   disabled: '#4D4D4D',
  //   hover: '#c5e4fd',
  //   accent: '#c5e4fd',
  //   error: '#811e18',
  //   errorSurface: '#ffcdca',
  // },
  syntax: {
    plain: '#d6deeb',
    comment: '#999999',
    keyword: '#c792ea',
    tag: '#7fdbca',
    punctuation: '#7fdbca',
    definition: '#82aaff',
    property: '##addb67',
    static: '#f78c6c',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    string: '#ecc48d',
  },

  palette: {
    activeText: 'inherit',
    defaultText: '#808080',
    inactiveText: 'inherit',
    activeBackground: '#243b4c',
    defaultBackground: '#243b4c',
    inputBackground: '#243b4c',
    accent: '#c5e4fd',
    errorBackground: '#ffcdca',
    errorForeground: '#811e18',
  },

  typography: {
    bodyFont: tokens.fontFamily,
    monoFont: tokens.fontFamilyMono,
    fontSize: '13px',
    lineHeight: '20px',
  },
};
