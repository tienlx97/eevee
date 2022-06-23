import * as React from 'react';
import { ToggleThemeState } from './ToggleTheme.types';
import { ButtonR } from '@eevee/react-button';
import { Sun, Moon } from '../icons/index';

export const renderToggleTheme = (state: ToggleThemeState) => {
  const { colorMode, setColorMode } = state;

  const isDark = colorMode === 'dark';

  const toggleColorMode = (event: any) => {
    event.preventDefault();
    if (setColorMode) {
      setColorMode(isDark ? 'light' : 'dark');
    }
  };

  return (
    <ButtonR
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={toggleColorMode}
      icon={isDark ? <Sun /> : <Moon />}
    />
  );
};
