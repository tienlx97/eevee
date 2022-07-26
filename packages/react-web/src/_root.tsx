import * as React from 'react';
import * as client from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@griffel/react';

import { webDarkTheme, webLightTheme, tokens } from '@eevee/react-theme';

import { App } from './app';

// css
import './asset/css/index.css';
import '@codesandbox/sandpack-react/dist/index.css';

// provider
import { EeveeProvider } from '@eevee/react-provider';
import { GAProvider, BlogContextProvider } from '@context/index';

import { registerServiceWorker } from '@feature/pwa/index';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: tokens.bg1,
  },
});

const Root = () => {
  const classes = useStyles();

  return (
    <Router>
      <GAProvider>
        <EeveeProvider
          //
          dir="ltr"
          className={classes.wrapper}
          lightTheme={webLightTheme}
          darkTheme={webDarkTheme}
        >
          <BlogContextProvider>
            <App />
          </BlogContextProvider>
        </EeveeProvider>
      </GAProvider>
    </Router>
  );
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('missing root element');
}

const root = client.createRoot(rootElement as Element);
root.render(<Root />);

// Initialize poroWorker if there's a service worker already.
registerServiceWorker();
