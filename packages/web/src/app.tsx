import * as React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Page } from './components/layout/index';
import { Scroll2Top } from './components/ scroll2top/index';

export const App = () => {
  const location = useLocation();

  // detect route change
  React.useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <Page>
      <Scroll2Top>
        <Routes>
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/search" element={<div>Search</div>} />
          <Route path="/notification" element={<div>Notification</div>} />
          <Route path="/write" element={<div>Write sth</div>} />
        </Routes>
      </Scroll2Top>
    </Page>
  );
};
