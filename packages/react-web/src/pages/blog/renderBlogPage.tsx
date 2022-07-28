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

/**
 * Render the final JSX of Blog
 */
export const renderBlogPage = (state: BlogPageState) => {
  const { reactionClassName } = state;
  return (
    <>
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
        <Reaction id="eve-BlogPage__reaction" className={reactionClassName} />
      </React.Suspense>
    </>
  );
};