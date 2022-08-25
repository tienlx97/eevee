import * as React from 'react';
import { useEevee } from '@eevee/react-shared-contexts';
import { applyFocusVisiblePolyfill } from '../focus/focusVisiblePolyfill';

export function useFocusVisible<TElement extends HTMLElement = HTMLElement>() {
  const { targetDocument } = useEevee();
  const scopeRef = React.useRef<TElement>(null);

  React.useEffect(() => {
    if (targetDocument?.defaultView && scopeRef.current) {
      return applyFocusVisiblePolyfill(scopeRef.current, targetDocument.defaultView);
    }
  }, [scopeRef, targetDocument]);

  return scopeRef;
}
