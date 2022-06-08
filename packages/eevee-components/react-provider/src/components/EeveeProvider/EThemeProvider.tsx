import * as React from 'react';
import { useEevee, EThemeContext } from '@eevee/react-shared-contexts';
import type { EMode } from '@eevee/react-shared-contexts';
import type { PartialTheme } from '@eevee/react-theme';

type EThemeProviderProps = {
  lightTheme: PartialTheme;
  darkTheme: PartialTheme;
};

export const EThemeProvider: React.FC<EThemeProviderProps> = ({ children, darkTheme, lightTheme }) => {
  const parentContext = useEevee();
  let initialColorValue: EMode = 'light';
  const targetDocument = parentContext.targetDocument;

  if (targetDocument) {
    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.

    initialColorValue = localStorage.getItem('prefer-dark') === 'true' ? 'dark' : 'light';
  }

  const [colorMode, rawSetColorMode] = React.useState<EMode>(initialColorValue);

  const value = React.useMemo(() => {
    const setColorMode = (colorValue: EMode) => {
      if (!targetDocument) {
        return null;
      }

      const root = targetDocument.documentElement;

      const prefersDark = colorValue === 'dark';

      const theme = prefersDark ? darkTheme : lightTheme;

      (Object.keys(theme) as (keyof typeof theme)[]).reduce((cssVarRule, cssVar) => {
        root.style.setProperty(`--${cssVar}`, String(theme[cssVar]));
        return cssVarRule;
      }, '');

      // const entries = (Object.keys(theme) as (keyof typeof theme)[]).entries();

      // for (const [k, v] of entries) {
      //   root.style.setProperty(`--${k}`, v);
      // }

      rawSetColorMode(colorValue);

      localStorage.setItem('prefer-dark', String(prefersDark));
    };

    return {
      colorMode,
      setColorMode,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode, rawSetColorMode]);

  React.useEffect(() => {
    value.setColorMode(colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <EThemeContext.Provider value={value}>{children}</EThemeContext.Provider>;
};
