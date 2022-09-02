import * as React from 'react';
import useSWR from 'swr';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import type { Blog } from 'typings/my-mdx';

import { useGA } from '@context/GaContext';
import { BlogFetcher } from '@feature/blog/index';

import { MiddleLayout, RightLayout } from '@layout/index';

import {
  PostDetail,
  PostHeader,
  PostHeaderSkeleton,
  Reaction,
  ReactionSkeleton,
  PostDetailSkeleton,
  BlogRightBar,
  BlogRightBarSkeleton,
} from '@feature/blog/index';

import { Close } from '@components/icons/Close';
import { useReactionStyles } from './styles';
import { CommentSystem } from '@components/comment-system/index';

export const ViewBlog = () => {
  // styles
  const reactionStyles = useReactionStyles();

  // navigate hook
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const ga = useGA();

  const [blog, setBlog] = React.useState<Blog | null>(state ? (state as any).data : null);
  const { data: blogData, error } = useSWR(state ? null : slug, BlogFetcher);

  const mountCounter = React.useRef(0);
  const [isOpenComment, setOpenComment] = React.useState(false);

  React.useEffect(() => {
    if (blog) {
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', `blog/${blog.id}`);
    }
  }, [blog]);

  React.useEffect(() => {
    if (blogData && !error) {
      setBlog(blogData);
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
    } else if (error) {
      navigate(pathname, {
        replace: true,
        state: {
          errorStatusCode: 404,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ga, blogData, error]);

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

  return (
    <>
      <MiddleLayout>
        <CommentSystem
          onClose={() => setOpenComment!(false)}
          show={isOpenComment ?? false}
          closeButton={{ icon: <Close /> }}
        />

        {!blog && !error && (
          <>
            <PostHeaderSkeleton />
            <PostDetailSkeleton />
            <ReactionSkeleton className={reactionStyles.root} />
          </>
        )}

        {!blog && error && <></>}

        {blog && !error && (
          <>
            <PostHeader blog={blog} />
            <PostDetail blog={blog} />
            <Reaction
              setOpenComment={val => setOpenComment!(val)}
              id="eve-BlogPage__reaction"
              className={reactionStyles.root}
            />
          </>
        )}
      </MiddleLayout>
      <RightLayout>
        {!blog && !error && <BlogRightBarSkeleton />}
        {!blog && error && <></>}
        {blog && !error && <BlogRightBar blog={blog} />}
      </RightLayout>
    </>
  );
};
