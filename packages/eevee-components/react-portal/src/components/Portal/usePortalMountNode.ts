import * as React from 'react';
import { useIsomorphicLayoutEffect } from '@eevee/react-utilities';
import { useEevee } from '@eevee/react-shared-contexts';

export type UsePortalMountNodeOptions = {
  /**
   * Since hooks cannot be called conditionally use this flag to disable creating the node
   */
  disabled?: boolean;
};

/**
 * Creates a new element on a document.body to mount portals
 */
export const usePortalMountNode = (options: UsePortalMountNodeOptions): HTMLElement | null => {
  const { targetDocument, dir } = useEevee();

  const element = React.useMemo(() => {
    if (targetDocument === undefined || options.disabled) {
      return null;
    }

    const newElement = targetDocument.createElement('div');
    newElement.setAttribute('dir', dir);
    targetDocument.body.appendChild(newElement);

    return newElement;
  }, [targetDocument, dir, options.disabled]);

  useIsomorphicLayoutEffect(() => {
    return () => {
      element?.parentElement?.removeChild(element);
    };
  }, [element]);

  return element;
};
