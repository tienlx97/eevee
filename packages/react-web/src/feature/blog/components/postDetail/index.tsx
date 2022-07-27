import * as React from 'react';
import { useParams } from 'react-router-dom';
import { MDX } from '@components/Mdx/index';
import { H1 } from '@eevee/react-mdx-comp';
import { useBlogAPISWR } from '@feature/blog/index';
import { tokens } from '@eevee/react-theme';

export const PostDetail = () => {
  const { slug } = useParams();
  const post = useBlogAPISWR(slug);

  return (
    <>
      {post ? (
        <>
          <H1 style={{ color: tokens.f10, marginTop: '0' }}>{post.frontmatter.title}</H1>
          <MDX source={post.code} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
