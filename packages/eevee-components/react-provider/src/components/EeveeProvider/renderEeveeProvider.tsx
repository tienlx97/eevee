import * as React from 'react';
import { Provider } from '@eevee/react-shared-contexts';
import type { EeveeProviderContextValues } from './EeveeProvider.types';
import { TextDirectionProvider } from '@griffel/react';
import { EThemeProvider } from './EThemeProvider';

export function renderEeveeProvider({
  children,
  provider,
  darkTheme,
  lightTheme,
  textDirection,
  className,
}: EeveeProviderContextValues) {
  return (
    <Provider value={provider}>
      <EThemeProvider darkTheme={darkTheme} lightTheme={lightTheme}>
        <TextDirectionProvider dir={textDirection}>
          <div dir={textDirection} className={className}>
            {children}
          </div>
        </TextDirectionProvider>
      </EThemeProvider>
    </Provider>
  );
}
