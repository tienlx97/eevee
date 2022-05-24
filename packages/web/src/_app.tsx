import React from 'react';
import client from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './asset/css/CssVariables.css';
import './asset/css/fonts.css';
import './asset/css/components.css';

import 'tippy.js/dist/tippy.css';
import {
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
} from '@jolteon/components';

import Tutorial from './pages/layout/Tutorial';

loadDefaultThemeBeforeReactRender();

const Index = () => {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Routes>
          <Route path="/" element={<Tutorial />}>
            {/* <Route path="tutorial" element={<Tutorial />} /> */}
          </Route>
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
