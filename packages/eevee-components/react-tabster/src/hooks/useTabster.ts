import * as React from 'react';
import { useEevee } from '@eevee/react-shared-contexts';
import { createTabster, disposeTabster, Types as TabsterTypes } from 'tabster';
import { useIsomorphicLayoutEffect } from '@eevee/react-utilities';

/**
 * Tries to get a tabster instance on the current window or creates a new one
 * Since Tabster is single instance only, feel free to call this hook to ensure Tabster exists if necessary
 *
 * @internal
 * @returns Tabster core instance
 */
export const useTabster = (): TabsterTypes.TabsterCore | null => {
  const { targetDocument } = useEevee();

  const defaultView = targetDocument?.defaultView || undefined;
  const tabster = React.useMemo(() => {
    if (!defaultView) {
      return null;
    }

    return createTabster(defaultView, { autoRoot: {}, controlTab: false });
  }, [defaultView]);

  useIsomorphicLayoutEffect(() => {
    return () => {
      if (tabster) {
        disposeTabster(tabster);
      }
    };
  }, [tabster]);

  return tabster;
};
