// export const loadDefaultThemeBeforeReactRender = () => {
//   const initialColorValue = localStorage.getItem('prefer-dark') === 'true' ? 'dark' : 'light';
//   const prefersDark = initialColorValue === 'dark';

//   const root = window.document.documentElement;

//   (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
//     root.style.setProperty(`--${cssVar}`, String(theme[cssVar]));
//     return cssVarRule;
//   }, '');
// };
