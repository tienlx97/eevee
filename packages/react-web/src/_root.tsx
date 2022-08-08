//#region imports

import * as React from 'react';
import * as client from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@griffel/react';

import { webDarkTheme, webLightTheme, tokens } from '@eevee/react-theme';

import { App } from './app';

// css
import './asset/css/index.css';
import '@codesandbox/sandpack-react/dist/index.css';
// import '@code-hike/mdx/dist/index.css';

// provider
import { EeveeProvider as ConfigProvider } from '@eevee/react-provider';
import { GAProvider } from '@context/index';

import { registerServiceWorker } from '@feature/pwa/index';

//#endregion

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: tokens.bg1,
  },
});

const Root = () => {
  const styles = useStyles();

  return (
    <GAProvider>
      <ConfigProvider dir="ltr" className={styles.wrapper} lightTheme={webLightTheme} darkTheme={webDarkTheme}>
        <Router>
          <App />
        </Router>
      </ConfigProvider>
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
registerServiceWorker();
