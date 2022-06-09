import * as React from 'react';
import * as client from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import { EeveeProvider } from '@eevee/react-provider';
import { darkTheme, lightTheme, tokens } from '@eevee/react-theme';

import { siteConfig } from './siteConfig';
import { App } from './app';

import './asset/css/index.css';
import { makeStyles } from '@griffel/react';

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(siteConfig.gaTrackingId);
  }
  const terminationEvent = 'onpagehide' in window ? 'pagehide' : 'unload';
  window.addEventListener(terminationEvent, () => {
    ReactGA.send({ hitType: 'timing', timingCategory: 'JS Dependencies' });
  });
}

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: tokens.background1,
  },
});

const Root = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <EeveeProvider dir="ltr" className={classes.wrapper} lightTheme={lightTheme} darkTheme={darkTheme}>
        <App />
      </EeveeProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Root />);
