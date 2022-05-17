import React from 'react';
import client from 'react-dom/client';
import UIDebug from './_debug';

import './asset/css/CssVariables.css';
import './asset/css/fonts.css';
import 'tippy.js/dist/tippy.css';

import {
  ConfigProvider,
  ContentProvider,
  loadDefaultThemeBeforeReactRender,
} from '@jolteon/components';

loadDefaultThemeBeforeReactRender();

const Index = () => {
  // useCssReset();
  // useGlobalCss();
  return (
    <ConfigProvider>
      <ContentProvider
        contentType="tutorial"
        slug={'dynamic-bezier-curves'}
        title={'Dynamic Bézier Curves'}
        subtitle={undefined}
        category={'animation'}
        formattedCategory={'Animation'}
        isPublished={true}
        location={typeof window !== 'undefined' && window.location}
        hits={null}
      >
        <UIDebug />
      </ContentProvider>
    </ConfigProvider>
  );
};

const rootElement = document.getElementById('root');
const root = client.createRoot(rootElement as Element);
root.render(<Index />);
