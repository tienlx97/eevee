import React from 'react';
import client from 'react-dom/client';

import 'tippy.js/dist/tippy.css';
import '@vaporeon/global-styles/src/CssVariables.css';

// import { useCssReset, useGlobalCss } from '@vaporeon/global-styles';

import {
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
} from '@vaporeon/config-context';

loadDefaultThemeBeforeReactRender();

import App from './App';

const Index = () => {
  // useCssReset();
  // useGlobalCss();
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
