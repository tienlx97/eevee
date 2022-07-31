import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { BlogPageProps } from './BlogPage.types';
import { renderBlogPage } from './renderBlogPage';
import { useBlogPage } from './useBlogPage';
import { useBlogPageStyles } from './useBlogPageStyles';

/**
 * Blog give people a way to trigger an action.
 */
export const BlogPage: ForwardRefComponent<BlogPageProps> = React.forwardRef(
  (props: BlogPageProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useBlogPage(props, ref);

    useBlogPageStyles(state);

    return renderBlogPage(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<BlogPageProps>;

BlogPage.displayName = 'BlogPage';
