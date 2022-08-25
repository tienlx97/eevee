import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { useParams } from 'react-router-dom';
import { CH1, CH2, CH3, H1, HorizontalRule, Paragraph } from '@eevee/react-mdx-comp';
import { TagList } from '@feature/blog/index';
import { MDXRemote } from '@components/Mdx/remote';
import { getHeaderAnchors } from '../../hooks/useTocHighlight';
import type { Blog } from 'typings/my-mdx/index';

type PostDetailProps = JSX.IntrinsicElements['div'] & {
  blog: Blog;
};

export const PostDetail = ({ blog, ...props }: PostDetailProps) => {
  if (blog) {
    getHeaderAnchors();
  }

  return (
    <div style={{ height: '100%' }} {...props}>
      <H1 style={{ color: tokens.f10, marginTop: '0px' }}>{blog.title}</H1>
      <Paragraph>{blog.subtitle}</Paragraph>
      <MDXRemote lazy compiledSource={blog.compile_code} />
      <TagList tagList={blog.tags} />
      <HorizontalRule />
    </div>
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
