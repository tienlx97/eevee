import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page } from './components/layout/index';
import { Scroll2Top } from './components/ scroll2top/index';

const LazyPageNotFound = React.lazy(() =>
  import('./pages/PageNotFound/index').then(module => ({ default: module.PageNotFound })),
);
const LazyBlogItem = React.lazy(() => import('./pages/Blog/index').then(module => ({ default: module.Blog })));

export const App = () => {
  return (
    <Page>
      <Scroll2Top>
        <Routes>
          <Route path="*" element={<LazyPageNotFound />} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/search" element={<div>Search</div>} />
          <Route path="/notification" element={<div>Notification</div>} />
          <Route path="/write" element={<div>Write sth</div>} />
          <Route
            path="/blog/:slug"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyBlogItem />
              </React.Suspense>
            }
          />
        </Routes>
      </Scroll2Top>
    </Page>
  );
};
