import React from 'react';
import client from 'react-dom/client';

import 'tippy.js/dist/tippy.css';
import '@vaporeon/global-styles/src/CssVariables.css';

import {
  ConfigProvider,
  loadColorModeBeforeRender,
} from '@vaporeon/config-context';

loadColorModeBeforeRender();

import App from './App';

const Index = () => {
  return (
    <ConfigProvider>
      <App />
    </ConfigProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
