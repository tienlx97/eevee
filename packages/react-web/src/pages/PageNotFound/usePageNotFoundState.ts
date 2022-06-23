import * as React from 'react';
import type { PageNotFoundState } from './PageNotFound.types';
import { useLocation } from 'react-router-dom';

export const usePageNotFoundState = (state: PageNotFoundState): PageNotFoundState => {
  const location = useLocation();
  const [url, setURL] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    // If we're in a useEffect, this means we're in a client-side rendering
    // and in that case the current window.location is realistic.
    // When it's server-side rendered, the URL is "fake" just to generate
    // the "empty template" page.
    setURL(location.pathname);
  }, [location]);

  state.url = url;

  return state;
};
