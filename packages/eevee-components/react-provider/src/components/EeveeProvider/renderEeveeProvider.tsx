import * as React from 'react';
import { Provider, ThemeProvider, ThemeClassNameProvider } from '@eevee/react-shared-contexts';
import type { EeveeProviderContextValues } from './EeveeProvider.types';
import { TextDirectionProvider } from '@griffel/react';

export function renderEeveeProvider({
  children,
  provider,
  themeClassName,
  theme,
  textDirection,
  className,
}: EeveeProviderContextValues) {
  return (
    <Provider value={provider}>
      <ThemeProvider value={theme}>
        <ThemeClassNameProvider value={themeClassName}>
          <TextDirectionProvider dir={textDirection}>
            <div dir={textDirection} className={className}>
              {children}
            </div>
          </TextDirectionProvider>
        </ThemeClassNameProvider>
      </ThemeProvider>
    </Provider>
  );
}
