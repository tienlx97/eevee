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
  const { reactionClassName, post, error, setOpenComment, isOpenComment } = state;
  const { slots, slotProps } = getSlots<BlogPageSlots>(state);

  return (
    <>
      <slots.middleLayout {...slotProps.middleLayout}>
        <CommentSystem
          // eslint-disable-next-line react/jsx-no-bind
          onClose={() => setOpenComment!(false)}
          show={isOpenComment ?? false}
          closeButton={{ icon: <Close /> }}
        />

        {!post && !error && (
          <>
            <PostHeaderSkeleton />
            <PostDetailSkeleton />
            <ReactionSkeleton className={reactionClassName} />
          </>
        )}

        {!post && error && <></>}

        {post && !error && (
          <>
            <PostHeader post={post} />
            <PostDetail post={post} />
            <Reaction
              // eslint-disable-next-line react/jsx-no-bind
              setOpenComment={val => setOpenComment!(val)}
              id="eve-BlogPage__reaction"
              className={reactionClassName}
            />
          </>
        )}
      </slots.middleLayout>
      <slots.rightLayout>
        {!post && !error && <BlogRightBarSkeleton />}
        {!post && error && <></>}
        {post && !error && <BlogRightBar post={post} />}
      </slots.rightLayout>
    </>
  );
};
