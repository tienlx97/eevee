import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';

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

import { CommentSystem } from '@components/comment-system/index';
import { Close } from '@components/icons/Close';

import type { BlogPageSlots, BlogPageState } from './BlogPage.types';

/**
 * Render the final JSX of Blog
 */
export const renderBlogPage = (state: BlogPageState) => {
  const { reactionClassName, blog, error, setOpenComment, isOpenComment } = state;
  const { slots, slotProps } = getSlots<BlogPageSlots>(state);

  return (
    <>
      <slots.middleLayout {...slotProps.middleLayout}>
        <CommentSystem
          onClose={() => setOpenComment!(false)}
          show={isOpenComment ?? false}
          closeButton={{ icon: <Close /> }}
        />

        {!blog && !error && (
          <>
            <PostHeaderSkeleton />
            <PostDetailSkeleton />
            <ReactionSkeleton className={reactionClassName} />
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
              className={reactionClassName}
            />
          </>
        )}
      </slots.middleLayout>
      <slots.rightLayout>
        {!blog && !error && <BlogRightBarSkeleton />}
        {!blog && error && <></>}
        {blog && !error && <BlogRightBar blog={blog} />}
      </slots.rightLayout>
    </>
  );
};
