//#region imports

import * as React from 'react';
import * as client from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { makeStyles, shorthands } from '@griffel/react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { webDarkTheme, webLightTheme, tokens } from '@eevee/react-theme';
import { ToastPortal, ToastProvider, useToast } from '@eevee/react-toast';

// css
import './asset/css/index.css';
import '@codesandbox/sandpack-react/dist/index.css';

// provider
import { EeveeProvider as ConfigProvider } from '@eevee/react-provider';
import { AuthContextProvider, GAProvider } from '@context/index';

import { registerServiceWorker } from '@feature/pwa/index';

import { Home, Profile, Settings, UI, Search, Notification, PageNotFound, Blog, Edit } from '@pages/index';
import { NewStory } from '@pages/v2/new-story/index';
import { PageLayout, ProtectedRoute } from '@layout/index';
import { Scroll2Top } from '@components/scroll2top/index';

import { authorLoader, blogLoader, editLoader } from '@routes/index';
import { ProfileHome } from './feature/profile/index';
import { ComingSoon } from './components/coming-soon/index';

//#endregion

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: tokens.bg1,
    maxWidth: '1504px',
    ...shorthands.margin('auto'),
    display: 'block',
  },
});

function ErrorPage() {
  return <PageNotFound />;
}

const Root = () => {
  const styles = useStyles();
  const toastify = useToast();

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            if (query.state.data !== undefined) {
              toastify('error', `Something went wrong: ${(error as any).message}`);
            }
          },
        }),
      }),
  );

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={
              <AuthContextProvider>
                <GAProvider>
                  <ConfigProvider
                    dir="ltr"
                    className={styles.wrapper}
                    lightTheme={webLightTheme}
                    darkTheme={webDarkTheme}
                  >
                    <QueryClientProvider client={queryClient}>
                      <ToastProvider>
                        <PageLayout>
                          <Scroll2Top>
                            <Outlet />
                          </Scroll2Top>
                        </PageLayout>
                        <ToastPortal />
                      </ToastProvider>
                      <ReactQueryDevtools position="bottom-right" />
                    </QueryClientProvider>
                  </ConfigProvider>
                </GAProvider>
              </AuthContextProvider>
            }
          >
            <Route errorElement={<ErrorPage />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="ui" element={<UI />} />
              <Route path="search" element={<Search />} />
              <Route
                path="p/:blogID/edit"
                loader={editLoader}
                element={
                  <ProtectedRoute>
                    <Edit />
                  </ProtectedRoute>
                }
              />
              <Route
                path="b/:slug"
                // ⬇️ pass the queryClient to the route
                loader={blogLoader(queryClient)}
                element={<Blog />}
              />
              <Route path="@:nickname" loader={authorLoader(queryClient)} element={<Profile />}>
                <Route index element={<ProfileHome />} />
                <Route path="lists" element={<ComingSoon disableOption date="2022-10-25 00:00:00" />} />
                <Route path="about" element={<ComingSoon disableOption date="2022-10-25 00:00:00" />} />
              </Route>
              <Route
                path="/new-story"
                element={
                  <ProtectedRoute>
                    <NewStory type="new" />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/me/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notification"
                element={
                  <ProtectedRoute>
                    <Notification />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Route>,
        ),
      )}
    />
  );
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('missing root element');
}

const root = client.createRoot(rootElement as Element);
root.render(<Root />);

// Initialize poroWorker if there's a service worker already.
registerServiceWorker();
