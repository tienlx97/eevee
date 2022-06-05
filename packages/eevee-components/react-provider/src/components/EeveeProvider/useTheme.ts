import * as React from 'react';
import type { ThemeContextValue } from '@eevee/react-shared-contexts';
import { ThemeContext } from '@eevee/react-shared-contexts';

export function useTheme(): ThemeContextValue {
  return React.useContext(ThemeContext);
}
