import * as React from 'react';
import * as client from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import { EeveeProvider } from '@eevee/react-provider';
import { darkTheme, tokens } from '@eevee/react-theme';

import { siteConfig } from './siteConfig';
import { App } from './app';

import './asset/css/index.css';
import { makeStyles, shorthands } from '@griffel/react';

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
    display: 'block',
    maxWidth: '1504px',
    backgroundColor: tokens.colorBackground1,
    ...shorthands.margin('auto'),
  },
});

const Root = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <EeveeProvider dir="ltr" className={classes.wrapper} theme={darkTheme}>
        <App />
      </EeveeProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Root />);
