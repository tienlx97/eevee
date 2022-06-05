import * as React from 'react';
import type { Theme } from '@eevee/react-theme';

export type ThemeContextValue = Theme | Partial<Theme> | undefined;

export const ThemeContext = React.createContext<ThemeContextValue>(undefined);

export const { Provider: ThemeProvider } = ThemeContext;
