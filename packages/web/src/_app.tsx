import React from 'react';
import client from 'react-dom/client';

import 'tippy.js/dist/tippy.css';
import '@jolteon/components/src/global-styles/CssVariables.css';

// import { useCssReset, useGlobalCss } from '@vaporeon/global-styles';

import {
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
} from '@jolteon/components';

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
