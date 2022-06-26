import * as React from 'react';
import { useEevee, EThemeContext } from '@eevee/react-shared-contexts';
import type { EMode } from '@eevee/react-shared-contexts';
import type { PartialTheme } from '@eevee/react-theme';

type EThemeProviderProps = {
  lightTheme: PartialTheme;
  darkTheme: PartialTheme;
};

function getInitialColorMode(): EMode {
  const persistedColorPreference = localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference === 'dark' ? 'dark' : 'light';
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
}

export const EThemeProvider: React.FC<EThemeProviderProps> = ({ children, darkTheme, lightTheme }) => {
  const parentContext = useEevee();

  const { targetDocument } = parentContext;

  const initialColorValue = getInitialColorMode();

  const [colorMode, rawSetColorMode] = React.useState<EMode>(initialColorValue);

  const value = React.useMemo(() => {
    const setColorMode = (colorValue: EMode) => {
      if (!targetDocument) {
        return null;
      }

      const root = targetDocument.documentElement;

      const theme = colorValue === 'dark' ? darkTheme : lightTheme;

      (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
        root.style.setProperty(`--${cssVar}`, String(theme[cssVar]));
        return cssVarRule;
      }, '');

      // const entries = (Object.keys(theme) as (keyof typeof theme)[]).entries();

      // for (const [k, v] of entries) {
      //   root.style.setProperty(`--${k}`, v);
      // }

      rawSetColorMode(colorValue);

      // Persist it on update
      const html = targetDocument.getElementById('html-client-id');
      if (html) {
        html.className = colorValue === 'dark' ? 'dark' : '';
      }
      localStorage.setItem('color-mode', String(colorValue));
    };

    return {
      colorMode,
      setColorMode,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode, rawSetColorMode]);

  return <EThemeContext.Provider value={value}>{children}</EThemeContext.Provider>;
};
