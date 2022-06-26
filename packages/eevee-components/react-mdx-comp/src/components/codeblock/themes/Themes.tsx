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
  // syntax: {
  //   plain: '#d6deeb',
  //   comment: '#999999',
  //   keyword: '#c792ea',
  //   tag: '#7fdbca',
  //   punctuation: '#7fdbca',
  //   definition: '#82aaff',
  //   property: '##addb67',
  //   static: '#f78c6c',
  //   // eslint-disable-next-line @typescript-eslint/naming-convention
  //   string: '#ecc48d',
  // },

  // palette: {
  //   activeText: 'inherit',
  //   defaultText: '#808080',
  //   inactiveText: 'inherit',
  //   activeBackground: '#243b4c',
  //   defaultBackground: '#243b4c',
  //   inputBackground: '#243b4c',
  //   accent: '#c5e4fd',
  //   errorBackground: '#ffcdca',
  //   errorForeground: '#811e18',
  // },

  // typography: {
  //   bodyFont: tokens.fontFamily,
  //   monoFont: tokens.fontFamilyMono,
  //   fontSize: '13px',
  //   lineHeight: '20px',
  // },

  palette: {
    activeText: 'inherit',
    defaultText: 'inherit',
    inactiveText: 'inherit',
    activeBackground: 'inherit',
    defaultBackground: 'inherit',
    inputBackground: 'inherit',
    accent: 'inherit',
    errorBackground: 'inherit',
    errorForeground: 'inherit',
  },
  syntax: {
    plain: tokens.themePlain, // '#d6deeb',
    comment: tokens.themeComment, // '#999999',
    keyword: tokens.themeKeyword, // '#c792ea',
    tag: tokens.themeTag, //'#7fdbca',
    punctuation: tokens.themePunctuation, // '#7fdbca',
    definition: tokens.themeDefinition, // '#82aaff',
    property: tokens.themeProperty, // '#addb67',
    static: tokens.themeStatic, // '#f78c6c',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    string: tokens.themeString, // '#ecc48d',
  },
  typography: {
    bodyFont: tokens.fontFamily,
    monoFont: tokens.fontFamilyMono,
    fontSize: '13px',
    lineHeight: '20px',
  },
};
