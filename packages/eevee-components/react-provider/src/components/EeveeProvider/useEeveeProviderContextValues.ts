import * as React from 'react';
import type { EeveeProviderState, EeveeProviderContextValues } from './EeveeProvider.types';

/**
 * Setting `dir` and `targetDocument`
 * @param state
 * @returns
 */
export function useEeveeProviderContextValues(state: EeveeProviderState): EeveeProviderContextValues {
  const { dir, targetDocument, ...rest } = state;

  const provider = React.useMemo(() => ({ dir, targetDocument }), [dir, targetDocument]);

  return {
    provider,
    textDirection: dir,
    ...rest,
  };
}
