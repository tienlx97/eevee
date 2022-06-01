import * as React from 'react';
import { Provider, ThemeProvider, ThemeClassNameProvider } from '@eevee/react-shared-contexts';
import type { EeveeProviderContextValues } from './EeveeProvider.types';

import { makeStyles, mergeClasses, TextDirectionProvider } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const eeveeProviderClassNames = {
  root: 'eve-EeveeProvider',
};

const useStyles = makeStyles({
  root: {
    color: tokens.colorForeground1,
    backgroundColor: tokens.colorForeground1,
    fontFamily: tokens.fontFamily,
  },
});

export function renderEeveeProvider({
  children,
  provider,
  themeClassName,
  theme,
  textDirection,
}: EeveeProviderContextValues) {
  const style = useStyles();
  const classes = mergeClasses(eeveeProviderClassNames.root, style.root, themeClassName);
  return (
    <Provider value={provider}>
      <ThemeProvider value={theme}>
        <ThemeClassNameProvider value={themeClassName}>
          <TextDirectionProvider dir={textDirection}>
            <div dir={textDirection} className={classes}>
              {children}
            </div>
          </TextDirectionProvider>
        </ThemeClassNameProvider>
      </ThemeProvider>
    </Provider>
  );
}
