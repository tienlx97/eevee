import * as React from 'react';
import {
  PostDetail,
  PostHeader,
  PostHeaderSkeleton,
  Reaction,
  ReactionSkeleton,
  PostDetailSkeleton,
} from '@feature/blog/index';

import type { BlogPageState } from './BlogPage.types';
import { CommentSystem } from '@components/comment-system/index';
import { Close } from '../../components/icons/Close';

/**
 * Render the final JSX of Blog
 */
export const renderBlogPage = (state: BlogPageState) => {
  const { reactionClassName, post, error, setOpenComment, isOpenComment } = state;

  if (!post && !error) {
    return (
      <>
        <PostHeaderSkeleton />
        <PostDetailSkeleton />
        <ReactionSkeleton className={reactionClassName} />
      </>
    );
  }

  if (!post) {
    return <></>;
  }

  return (
    <>
      <CommentSystem
        // eslint-disable-next-line react/jsx-no-bind
        onClose={() => setOpenComment!(false)}
        show={isOpenComment ?? false}
        closeButton={{ icon: <Close /> }}
      />
      <PostHeader post={post} />
      <PostDetail post={post} />

      <Reaction
        // eslint-disable-next-line react/jsx-no-bind
        setOpenComment={val => setOpenComment!(val)}
        id="eve-BlogPage__reaction"
        className={reactionClassName}
      />
    </>
  );
};
