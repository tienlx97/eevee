import * as React from 'react';
import type { EeveeProviderState, EeveeProviderContextValues } from './EeveeProvider.types';

export function useEeveeProviderContextValues(state: EeveeProviderState): EeveeProviderContextValues {
  const { dir, targetDocument, theme, themeClassName, className } = state;

  const provider = React.useMemo(() => ({ dir, targetDocument }), [dir, targetDocument]);

  return {
    provider,
    textDirection: dir,
    theme,
    themeClassName,
    className,
  };
}
