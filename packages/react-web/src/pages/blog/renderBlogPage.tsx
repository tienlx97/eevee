import * as React from 'react';
import { Spinner } from '@components/spinner/Spinner';
import {
  PostDetail,
  PostHeader,
  PostHeaderSkeleton,
  Reaction,
  ReactionSkeleton,
  PostDetailSkeleton,
} from '@feature/blog/index';

import type { BlogPageState } from './BlogPage.types';
import { CommentSystem } from '@components/comment/index';

/**
 * Render the final JSX of Blog
 */
export const renderBlogPage = (state: BlogPageState) => {
  const { reactionClassName } = state;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpenComment, setOpenComment] = React.useState(false);

  return (
    <>
      <CommentSystem
        // eslint-disable-next-line react/jsx-no-bind
        onClose={() => setOpenComment(false)}
        show={isOpenComment}
      />
      <React.Suspense
        fallback={
          <>
            <PostHeaderSkeleton />
            <PostDetailSkeleton />
          </>
        }
      >
        <PostHeader />
        <PostDetail />
      </React.Suspense>
      <React.Suspense fallback={<ReactionSkeleton className={reactionClassName} />}>
        <Reaction
          // eslint-disable-next-line react/jsx-no-bind
          setOpenComment={val => setOpenComment(val)}
          id="eve-BlogPage__reaction"
          className={reactionClassName}
        />
      </React.Suspense>
    </>
  );
};
