import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlogState, BlogSlots } from './Blog.types';
import { MDX } from '../../Mdx/index';
import { Spinner } from '../../components/spinner/Spinner';
import { useParams } from 'react-router-dom';
import { useFetchBlogSuspense } from '../../hooks/useFetchBlogSuspense';

/**
 * Render the final JSX of Blog
 */
export const renderBlog = (state: BlogState) => {
  // TODO Add additional slots in the appropriate place

  return (
    <React.Suspense fallback={<Spinner />}>
      <BlogSuspense state={state} />
    </React.Suspense>
  );
};

export const BlogSuspense = ({ state }: { state: BlogState }) => {
  const { slots, slotProps } = getSlots<BlogSlots>(state);

  const { slug } = useParams();
  const post = useFetchBlogSuspense(true, slug);

  return <slots.root {...slotProps.root}>{post && <MDX source={post.code} />}</slots.root>;
};
