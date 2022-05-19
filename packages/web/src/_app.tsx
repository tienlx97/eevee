import React from 'react';
import client from 'react-dom/client';
import UIDebug from './_debug';
// import MDXTest from './_mdx';

import './asset/css/CssVariables.css';
import './asset/css/fonts.css';
import 'tippy.js/dist/tippy.css';

import {
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
} from '@jolteon/components';

loadDefaultThemeBeforeReactRender();

const Index = () => {
  // useCssReset();
  // useGlobalCss();
  return (
    <ConfigProvider>
      <UIDebug />
      {/* <MDXTest /> */}
    </ConfigProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
