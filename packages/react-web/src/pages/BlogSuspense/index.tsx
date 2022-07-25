/* eslint-disable @eevee/max-len */
import * as React from 'react';
import { useFetchBlogSuspense } from '../../hooks/useFetchBlogSuspense';
import { useParams } from 'react-router-dom';
import { tokens } from '@eevee/react-theme';
import { MDX } from '../../Mdx/index';
import { Spinner } from '../../components/spinner/Spinner';
import { ErrorBoundary } from 'react-error-boundary';

export const BlogSuspense = () => {
  return (
    <ErrorBoundary fallback={<div>Soryy</div>}>
      <React.Suspense fallback={<Spinner />}>
        <BlogPage />
      </React.Suspense>
    </ErrorBoundary>
  );
};

const BlogPage = () => {
  const { slug } = useParams();
  const content = useFetchBlogSuspense(true, slug);

  return <div>{content && <MDX source={content.code} />}</div>;
};
