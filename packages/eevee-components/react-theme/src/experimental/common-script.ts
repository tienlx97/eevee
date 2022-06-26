import { webDarkTheme, webLightTheme } from './theme/index';
import type { PartialTheme } from './theme.types';

const generateTheme = (theme: PartialTheme) => {
  // eslint-disable-next-line
  const obj = {} as any;
  (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
    // eslint-disable-next-line
    obj[`${cssVar}`] = String(theme[cssVar]) as any;
    return cssVarRule;
  }, '');
  return obj;
};

const dark = generateTheme(webDarkTheme);
const light = generateTheme(webLightTheme);

export const themeGenerate = `
  const dark = ${JSON.stringify(dark)};
  const light = ${JSON.stringify(light)};
`;
