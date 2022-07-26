import * as React from 'react';

declare global {
  interface Window {
    ga?: Function;
  }
}

export type GAFunction = (...arg0: any[]) => void;

const GA_SESSION_STORAGE_KEY = 'ga';

function ga(...args: any[]) {
  if (typeof window === 'object' && typeof window.ga === 'function') {
    window.ga(...args);
  }
}

const GAContext = React.createContext<GAFunction>(ga);

function getPostponedEvents() {
  let value;
  try {
    value = sessionStorage.getItem(GA_SESSION_STORAGE_KEY);
  } catch (e) {
    // No sessionStorage support
    return [];
  }
  return JSON.parse(value || JSON.stringify([]));
}

/**
 * If we're running in the browser (not being server-side rendered)
 * and if the HTML document includes the Google Analytics snippet that
 * defines the ga() function, then this provider component makes that
 * ga() function available to any component via:
 *
 *    let ga = useContext(GAProvider.context)
 *
 * If we're not in a browser or if google analytics is not enabled,
 * then we provide a dummy function that ignores its arguments and
 * does nothing.  The idea is that components can always safely call
 * the function provided by this component.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function GAProvider(props: { children: React.ReactNode }) {
  /**
   * Checks for the existence of postponed analytics events, which we store
   * in sessionStorage. It also clears them so that they aren't sent again.
   */
  React.useEffect(() => {
    const events = getPostponedEvents();
    try {
      sessionStorage.removeItem(GA_SESSION_STORAGE_KEY);
    } catch (e) {
      // No sessionStorage support
    }
    for (const event of events) {
      ga('send', event);
    }
  }, []);

  return <GAContext.Provider value={ga}>{props.children}</GAContext.Provider>;
}

// This is a custom hook to return the GA client id. It returns the
// empty string until (and unless) it can determine that id from the GA object.
export function useClientId() {
  const [clientId, setClientId] = React.useState<string>('');
  const gaContext = React.useContext(GAContext);
  React.useEffect(() => {
    gaContext((tracker: any) => {
      setClientId(tracker.get('clientId'));
    });
  }, [gaContext]);

  return clientId;
}

export function useGA() {
  // get the context
  const context = React.useContext(GAContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useGA was used outside of its Provider');
  }

  return context;
}
