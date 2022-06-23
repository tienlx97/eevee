import * as React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { Page } from './components/layout/index';
import { Scroll2Top } from './components/ scroll2top/index';

const LazyBlogItem = React.lazy(() => import('./pages/Blog/index').then(module => ({ default: module.Blog })));

export const App = () => {
  const location = useLocation();

  return (
    <Page>
      <Scroll2Top>
        <Routes>
          <Route path="*" element={<div>Not found</div>} />
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
