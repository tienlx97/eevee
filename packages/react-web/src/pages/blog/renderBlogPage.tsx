import * as React from 'react';
import { Spinner } from '@components/spinner/Spinner';
import { PostDetail, PostHeader, PublishIn, Reaction } from '@feature/blog/index';
import { getSlots } from '@eevee/react-utilities';

import type { BlogPageState, BlogPageSlots } from './BlogPage.types';
import { ReactionSkeleton } from '@components/skeleton/ReactionSkeleton';

const hide = true;

/**
 * Render the final JSX of Blog
 */
export const renderBlogPage = (state: BlogPageState) => {
  const { flexCenterClassName } = state;
  const { slots, slotProps } = getSlots<BlogPageSlots>(state);

  return (
    <div className={flexCenterClassName}>
      {!hide && <PublishIn />}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <slots.root {...slotProps.root}>
          <React.Suspense fallback={<Spinner />}>
            <PostHeader />
            <PostDetail />
          </React.Suspense>
        </slots.root>
      </div>
      <React.Suspense fallback={<></>}>
        <Reaction />
      </React.Suspense>
    </div>
  );
};
