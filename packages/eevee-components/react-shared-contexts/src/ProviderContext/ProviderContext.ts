import * as React from 'react';

export interface ProviderContextValue {
  /** Sets the direction of text & generated styles. */
  dir: 'ltr' | 'rtl';

  /** Provides the document, can be undefined during SSR render. */
  targetDocument?: Document;
}

export const ProviderContext = React.createContext<ProviderContextValue>({
  targetDocument: typeof document === 'object' ? document : undefined,
  dir: 'ltr',
});

export const { Provider } = ProviderContext;

export function useEevee(): ProviderContextValue {
  return React.useContext(ProviderContext);
}
