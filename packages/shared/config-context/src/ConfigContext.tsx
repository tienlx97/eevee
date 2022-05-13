/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * This context holds user configuration stuff, like:
 * - Dark or light mode
 */
import React, { createContext, useMemo, useState } from 'react';
import { usePersistedState } from '@vaporeon/hooks';
import {
  DARK_COLORS,
  LIGHT_COLORS,
  PREFERS_DARK_CSS_PROP,
  PREFERS_DARK_KEY,
} from '@vaporeon/constants';

interface IConfigProps {
  colorMode: string;
  setColorMode: (colorValue: string) => void;
  allowColorTransitions: boolean;
  disableTabInCodeSnippets: any;
  setDisableTabInCodeSnippets: any;
}

export const ConfigContext = createContext<IConfigProps>({} as IConfigProps);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  let initialColorValue = 'light';
  const initialAllowColorTransitions = false;

  if (typeof window !== 'undefined') {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    initialColorValue =
      root.style.getPropertyValue(PREFERS_DARK_CSS_PROP) === 'true'
        ? 'dark'
        : 'light';
  }

  const [colorMode, rawSetColorMode] = useState(initialColorValue);

  const [disableTabInCodeSnippets, setDisableTabInCodeSnippets] =
    usePersistedState('tab-in-code-snippets', true);

  const [allowColorTransitions, setAllowColorTransitions] = useState(
    initialAllowColorTransitions
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => {
    const setColorMode = (colorValue: string) => {
      if (!allowColorTransitions) {
        setAllowColorTransitions(true);
      }

      const root = window.document.documentElement;

      const prefersDark = colorValue === 'dark';
      root.style.setProperty(PREFERS_DARK_CSS_PROP, prefersDark as any);

      const newColors = prefersDark ? DARK_COLORS : LIGHT_COLORS;

      root.style.setProperty('--color-text', newColors.text);
      root.style.setProperty('--color-background', newColors.background);
      root.style.setProperty(
        '--color-blurred-background',
        newColors.blurredBackground
      );
      root.style.setProperty('--color-primary', newColors.primary);
      root.style.setProperty('--color-secondary', newColors.secondary);
      root.style.setProperty('--color-tertiary', newColors.tertiary);
      root.style.setProperty('--color-decorative', newColors.decorative);
      root.style.setProperty('--color-muted', newColors.muted);
      root.style.setProperty(
        '--color-muted-background',
        newColors.mutedBackground
      );
      root.style.setProperty('--color-info', newColors.info);
      root.style.setProperty('--color-success', newColors.success);
      root.style.setProperty(
        '--color-success-background',
        newColors.successBackground
      );
      root.style.setProperty('--color-error', newColors.error);
      root.style.setProperty(
        '--color-error-background',
        newColors.errorBackground
      );
      root.style.setProperty('--color-alert', newColors.alert);
      root.style.setProperty(
        '--color-alert-background',
        newColors.alertBackground
      );
      root.style.setProperty('--color-venn-0', newColors.venn[0]);
      root.style.setProperty('--color-venn-1', newColors.venn[1]);
      root.style.setProperty('--color-gray-100', newColors.gray[100]);
      root.style.setProperty('--color-gray-200', newColors.gray[200]);
      root.style.setProperty('--color-gray-300', newColors.gray[300]);
      root.style.setProperty('--color-gray-400', newColors.gray[400]);
      root.style.setProperty('--color-gray-500', newColors.gray[500]);
      root.style.setProperty('--color-gray-600', newColors.gray[600]);
      root.style.setProperty('--color-gray-700', newColors.gray[700]);
      root.style.setProperty('--color-gray-900', newColors.gray[900]);
      root.style.setProperty('--color-gray-1000', newColors.gray[1000]);
      root.style.setProperty(
        '--color-subtle-background',
        newColors.subtleBackground
      );
      root.style.setProperty(
        '--color-subtle-floating',
        newColors.subtleFloating
      );
      root.style.setProperty('--color-homepage-light', newColors.homepageLight);
      root.style.setProperty('--color-homepage-dark', newColors.homepageDark);
      root.style.setProperty('--color-homepage-bg', newColors.homepageBg);

      root.style.setProperty('--syntax-bg', newColors.syntax.bg);
      root.style.setProperty('--syntax-highlight', newColors.syntax.highlight);
      root.style.setProperty('--syntax-txt', newColors.syntax.txt);
      root.style.setProperty('--syntax-comment', newColors.syntax.comment);
      root.style.setProperty('--syntax-prop', newColors.syntax.prop);
      root.style.setProperty('--syntax-bool', newColors.syntax.bool);
      root.style.setProperty('--syntax-val', newColors.syntax.val);
      root.style.setProperty('--syntax-str', newColors.syntax.str);
      root.style.setProperty('--syntax-name', newColors.syntax.name);
      root.style.setProperty('--syntax-del', newColors.syntax.del);
      root.style.setProperty('--syntax-regex', newColors.syntax.regex);
      root.style.setProperty('--syntax-fn', newColors.syntax.fn);

      rawSetColorMode(colorValue);

      localStorage.setItem(PREFERS_DARK_KEY, prefersDark as any);
    };

    return {
      colorMode,
      setColorMode,
      allowColorTransitions,
      disableTabInCodeSnippets,
      setDisableTabInCodeSnippets,
    };
  }, [
    colorMode,
    rawSetColorMode,
    allowColorTransitions,
    disableTabInCodeSnippets,
    setDisableTabInCodeSnippets,
  ]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
