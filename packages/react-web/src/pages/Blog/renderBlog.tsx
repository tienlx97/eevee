import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlogState, BlogSlots } from './Blog.types';
import { MDX } from '../../Mdx/index';

/**
 * Render the final JSX of Blog
 */
export const renderBlog = (state: BlogState) => {
  const { post } = state;
  const { slots, slotProps } = getSlots<BlogSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root}>{post && <MDX source={post.code} />}</slots.root>;
};
