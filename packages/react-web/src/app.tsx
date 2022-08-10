import * as React from 'react';
import { Routes, Route, Navigate, useMatch, useLocation } from 'react-router-dom';

import { PageLayout, ProtectedRoute } from '@layout/index';
import { Scroll2Top } from '@components/scroll2top/index';
import { ErrorHandler } from '@context/index';
import { Eye } from '@components/icons/index';
import { Spinner } from './components/spinner2/index';
import { Home, PageOrPageNotFound, NewStory } from '@pages/index';

const LazyPageNotFound = React.lazy(() => import('@pages/index').then(module => ({ default: module.PageNotFound })));
const LazyBlogPage = React.lazy(() => import('@pages/index').then(module => ({ default: module.BlogPage })));

export const App = () => {
  const [pageNotFound, setPageNotFound] = React.useState<boolean | undefined>(undefined);
  const { pathname } = useLocation();
  const initialPathname = React.useRef(pathname);

  React.useEffect(() => {
    setPageNotFound(undefined && initialPathname.current === pathname);
  }, [pathname]);

  const homePage = (
    <PageOrPageNotFound pageNotFound={pageNotFound ? pageNotFound : false}>
      <Home />
    </PageOrPageNotFound>
  );

  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={homePage} />
      <Route path="/search" element={<div>Search</div>} />
      <Route path="/blog/:slug" element={<LazyBlogPage />} />
      <Route
        path="/new-story"
        element={
          <ProtectedRoute>
            <NewStory hiddenButton={{ icon: <Eye /> }} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notification"
        element={
          <ProtectedRoute>
            <div>Notification</div>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<LazyPageNotFound />} />
    </Routes>
  );

  return (
    <PageLayout>
      <ErrorHandler>
        <Scroll2Top>
          <React.Suspense
            fallback={
              <div style={{ width: '100%' }}>
                <Spinner />
              </div>
            }
          >
            {routes}
          </React.Suspense>
        </Scroll2Top>
      </ErrorHandler>
    </PageLayout>
  );
};
