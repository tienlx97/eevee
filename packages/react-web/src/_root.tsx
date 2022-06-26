import * as React from 'react';
import * as client from 'react-dom/client';
import { GAProvider } from './ga-context';
import { BrowserRouter as Router } from 'react-router-dom';
import { EeveeProvider } from '@eevee/react-provider';
import { webDarkTheme, webLightTheme, tokens } from '@eevee/react-theme';

import { App } from './app';

import './asset/css/index.css';
import '@codesandbox/sandpack-react/dist/index.css';

import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: tokens.bg1,
  },
});

const Root = () => {
  const classes = useStyles();

  return (
    <GAProvider>
      <EeveeProvider dir="ltr" className={classes.wrapper} lightTheme={webLightTheme} darkTheme={webDarkTheme}>
        <Router>
          <App />
        </Router>
      </EeveeProvider>
    </GAProvider>
  );
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('missing root element');
}

const root = client.createRoot(rootElement as Element);
root.render(<Root />);

// Initialize poroWorker if there's a service worker already.