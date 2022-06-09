import * as React from 'react';
import { EThemeContext } from '@eevee/react-shared-contexts';
import { ToggleThemeState } from './ToggleTheme.types';

export const useToggleTheme = (): ToggleThemeState => {
  const { colorMode, setColorMode } = React.useContext(EThemeContext)!;

  return {
    colorMode,
    setColorMode,
  };
};
