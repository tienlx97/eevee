import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page } from './components/layout/index';
import { Blog } from './pages/Blog/index';

import { Scroll2Top } from './components/ scroll2top/index';
import { ErrorHandler } from './contexts/ErrorHandler';

const LazyPageNotFound = React.lazy(() =>
  import('./pages/PageNotFound/index').then(module => ({ default: module.PageNotFound })),
);

export const App = () => {
  return (
    <Page>
      <Scroll2Top>
        <ErrorHandler>
          <Routes>
            <Route path="*" element={<LazyPageNotFound />} />
            <Route path="/home" element={<div>Home</div>} />
            <Route path="/search" element={<div>Search</div>} />
            <Route path="/notification" element={<div>Notification</div>} />
            <Route path="/write" element={<div>Write sth</div>} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/404/:slug" element={<LazyPageNotFound />} />
          </Routes>
        </ErrorHandler>
      </Scroll2Top>
    </Page>
  );
};
