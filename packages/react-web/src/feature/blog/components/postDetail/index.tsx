import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { useParams } from 'react-router-dom';
import { H1, HorizontalRule } from '@eevee/react-mdx-comp';
import { useBlogAPISWR, TagList } from '@feature/blog/index';
import { MDX } from '@components/Mdx/index';

export const PostDetail = (props: JSX.IntrinsicElements['div']) => {
  const { slug } = useParams();
  const post = useBlogAPISWR(slug);

  return post ? (
    <div style={{ height: '100%' }} {...props}>
      <H1 style={{ color: tokens.f10, marginTop: '0' }}>{post.frontmatter.title}</H1>
      <MDX source={post.code} />
      <TagList tagList={post.frontmatter.tags as any} />
      <HorizontalRule />
    </div>
  ) : (
    <></>
  );
};

export const PostDetailSkeleton = () => {
  return (
    <div>
      <div className="tweet-header skeleton-line heading-3" style={{ width: '70%' }} />
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '35%' }} />
      </div>
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-header skeleton-line heading-3" style={{ width: '40%' }} />
      <div style={{ marginBottom: '25px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '55%' }} />
      </div>
      <div style={{ marginBottom: '35px' }} />
      <div className="tweet-header skeleton-line heading-3" style={{ width: '60%' }} />
      <div style={{ marginBottom: '25px' }} />
      <div className="tweet-text">
        <div className="skeleton-line heading" style={{ width: '95%' }} />
        <div className="skeleton-line heading" style={{ width: '100%' }} />
        <div className="skeleton-line heading" style={{ width: '75%' }} />
      </div>
    </div>
  );
};
