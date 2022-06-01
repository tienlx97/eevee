import * as React from 'react';
import { Provider, ThemeProvider, ThemeClassNameProvider } from '@eevee/react-shared-contexts';
import type { EeveeProviderContextValues } from './EeveeProvider.types';

import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

const useStyles = makeStyles({
  root: {
    color: tokens.colorForeground1,
    backgroundColor: tokens.colorForeground1,
    fontFamily: tokens.fontFamily,
  },
});

export function renderEeveeProvider({ children, provider, themeClassName, theme }: EeveeProviderContextValues) {
  const style = useStyles();
  const classes = mergeClasses(style.root, themeClassName);
  return (
    <Provider value={provider}>
      <ThemeProvider value={theme}>
        <ThemeClassNameProvider value={themeClassName}>
          <div className={classes}>{children}</div>
        </ThemeClassNameProvider>
      </ThemeProvider>
    </Provider>
  );
}
