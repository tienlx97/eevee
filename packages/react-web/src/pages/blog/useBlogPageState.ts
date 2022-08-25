import * as React from 'react';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import { useGA } from '@context/GaContext';
import { useBlog } from '@feature/blog/index';
import type { BlogPageState } from './BlogPage.types';

export const useBlogPageState = (state: BlogPageState): BlogPageState => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const ga = useGA();
  const { data, error } = useBlog(slug);

  const mountCounter = React.useRef(0);

  const [isOpenComment, setOpenComment] = React.useState(false);

  state.setOpenComment = setOpenComment;
  state.isOpenComment = isOpenComment;
  state.blog = data;
  state.error = error;

  React.useEffect(() => {
    if (!data && !error) {
      document.title = '⏳ Loading…';
    } else if (error) {
      document.title = '💔 Loading error';
      navigate(pathname, {
        replace: true,
        state: {
          errorStatusCode: 404,
        },
      });
    } else if (data) {
      document.title = data.title;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  React.useEffect(() => {
    if (data && !error) {
      if (mountCounter.current > 0) {
        // 'dimension19' means it's a client-side navigation.
        // I.e. not the initial load but the location has now changed.
        // Note that in local development, where you use `localhost:3000`
        // this will always be true because it's always client-side navigation.
        ga('set', 'dimension19', 'Yes');
        ga('send', {
          hitType: 'pageview',
          location: window.location.toString(),
        });
      }

      // By counting every time a document is mounted, we can use this to know if
      // a client-side navigation happened.
      mountCounter.current++;
    }
  }, [ga, data, error]);

  React.useEffect(() => {
    const location = document.location;

    // Did you arrive on this page with a location hash?
    if (location.hash && location.hash !== location.hash.toLowerCase()) {
      // The location hash isn't lowercase. That probably means it's from before
      // we made all `<h2 id>` and `<h3 id>` values always lowercase.
      // Let's see if it can easily be fixed, but let's be careful and
      // only do this if there is an element that matches.
      try {
        if (document.querySelector(location.hash.toLowerCase())) {
          location.hash = location.hash.toLowerCase();
        }
      } catch (e) {
        if (e instanceof DOMException) {
          // You can't assume that the anchor on the page is a valid string
          // for `document.querySelector()`.
          // E.g. /en-US/docs/Web/HTML/Element/input#Form_<input>_types
          // So if that the case, just ignore the error.
          // It's not that critical to correct anyway.
        } else {
          throw e;
        }
      }
    }
  }, []);

  // navigate to error page
  // if (state.error) {
  //   navigate(pathname, {
  //     replace: true,
  //     state: {
  //       errorStatusCode: 404,
  //     },
  //   });
  // }

  return state;
};
