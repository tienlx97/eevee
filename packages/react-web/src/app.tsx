import * as React from 'react';
import { Routes, Route, Navigate, useMatch, useLocation } from 'react-router-dom';

import { PageLayout, WithoutWriteLayout, WriteLayout } from '@layout/index';
import { Scroll2Top } from '@components/scroll2top/index';
import { ErrorHandler } from '@context/index';
import { Eye } from '@components/icons/index';
import { Spinner } from './components/spinner2/index';
import { Home, PageOrPageNotFound, NewStory } from '@pages/index';

const LazyPageNotFound = React.lazy(() => import('@pages/index').then(module => ({ default: module.PageNotFound })));
const LazyBlogPage = React.lazy(() => import('@pages/index').then(module => ({ default: module.BlogPage })));

export const App = () => {
  const localeMatch = useMatch('/:locale/*');

  React.useEffect(() => {
    const locale = localeMatch?.params.locale || 'en';

    document.documentElement.setAttribute('lang', locale);
  }, [localeMatch]);

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
      {/*
        In production, all traffic at `/` is redirected to at least
        having a locale. So it'll be `/en-US` (for example) by the
        time it hits any React code.
       */}
      <Route path="/" element={<Navigate to="/:locale/*" replace />} />
      <Route
        path="/:locale/*"
        element={
          <Routes>
            <Route element={<WithoutWriteLayout />}>
              <Route path="/" element={homePage} />
              <Route path="/new-story" element={<NewStory hiddenButton={{ icon: <Eye /> }} />} />
              <Route path="/search" element={<div>Search</div>} />
              <Route path="/notification" element={<div>Notification</div>} />
              <Route path="/blog/:slug" element={<LazyBlogPage />} />
              <Route path="*" element={<LazyPageNotFound />} />
            </Route>
            {/* <Route
              path="/new-story"
              element={
                <WriteLayout>
                  <NewStory hiddenButton={{ icon: <Eye /> }} />
                </WriteLayout>
              }
            /> */}
          </Routes>
        }
      />
    </Routes>
  );

  return (
    <PageLayout>
      <ErrorHandler>
        <Scroll2Top>
          <React.Suspense fallback={<Spinner />}>{routes}</React.Suspense>
        </Scroll2Top>
      </ErrorHandler>
    </PageLayout>
  );
};
