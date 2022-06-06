import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Page } from './components/layout/index';

export const App = () => {
  const location = useLocation();

  // detect route change
  React.useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return <Page />;
};
