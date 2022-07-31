import * as React from 'react';

export type EMode = 'light' | 'dark';

export type EThemeContextValue = {
  // darkTheme: Theme | Partial<Theme> | undefined;
  // lightTheme: Theme | Partial<Theme> | undefined;
  colorMode: EMode;
  setColorMode: (mode: EMode) => void;
};

export const EThemeContext = React.createContext<EThemeContextValue | undefined>(undefined);

export const { Provider: EThemeProvider } = EThemeContext;

// context consumer hook
export const useTheme = () => {
  // get the context
  const context = React.useContext(EThemeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useTheme was used outside of its Provider');
  }

  return context;
};
