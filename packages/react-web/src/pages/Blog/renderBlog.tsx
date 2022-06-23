import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlogState, BlogSlots } from './Blog.types';

/**
 * Render the final JSX of Blog
 */
export const renderBlog = (state: BlogState) => {
  const { slots, slotProps } = getSlots<BlogSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
