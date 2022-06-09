import * as React from 'react';
import { Theme } from '@eevee/react-theme';

export type EMode = 'light' | 'dark';

export type EThemeContextValue = {
  // darkTheme: Theme | Partial<Theme> | undefined;
  // lightTheme: Theme | Partial<Theme> | undefined;
  colorMode: EMode;
  setColorMode: (mode: EMode) => void;
};

export const EThemeContext = React.createContext<EThemeContextValue | undefined>(undefined);

export const { Provider: EThemeProvider } = EThemeContext;
