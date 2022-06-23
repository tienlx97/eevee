import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { BlogProps } from './Blog.types';
import { renderBlog } from './renderBlog';
import { useBlog } from './useBlog';
import { useBlogStyles } from './useBlogStyles';

/**
 * Blog give people a way to trigger an action.
 */
export const Blog: ForwardRefComponent<BlogProps> = React.forwardRef(
  (props: BlogProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useBlog(props, ref);

    useBlogStyles(state);

    return renderBlog(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<BlogProps>;

Blog.displayName = 'Blog';
