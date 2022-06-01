import { darkTheme } from '@eevee/react-theme';

import type { Theme } from '@eevee/react-theme';

export { EeveeProvider } from '@eevee/react-provider';

export const themes = [
  // { id: 'web-light', label: 'Web Light', theme: lightTheme },
  { id: 'web-dark', label: 'Web Dark', theme: darkTheme },
] as const;

export const defaultTheme = themes[0];

export type ThemeIds = typeof themes[number]['id'];
export type ThemeLabels = typeof themes[number]['label'];

export type { Theme };
