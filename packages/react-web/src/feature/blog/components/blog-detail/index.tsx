import * as React from 'react';
import { tokens } from '@eevee/react-theme';
import { H1, HorizontalRule, Paragraph } from '@eevee/react-mdx-comp';
import { TagList } from '@feature/blog/index';
import { MDXRemote } from '@components/Mdx/remote';
import { getHeaderAnchors } from '../../hooks/useTocHighlight';
import type { BlogQuery } from 'typings/schema/index';
import { serialize } from '@components/Mdx/serialize';

type PostDetailProps = JSX.IntrinsicElements['div'] & {
  blog: BlogQuery;
};

export const BlogDetail = ({ blog, ...props }: PostDetailProps) => {
  const [compileCode, setCompilecode] = React.useState<string | null>();

  if (blog) {
    getHeaderAnchors();
  }

  React.useEffect(() => {
    serialize(blog.mdx_code).then(r => setCompilecode(r.compiledSource));
  }, [blog.mdx_code]);

  return (
    <div style={{ height: '100%' }} {...props}>
      <H1 style={{ color: tokens.f10, marginTop: '0px' }}>{blog.title}</H1>
      <Paragraph>{blog.subtitle}</Paragraph>
      {compileCode && <MDXRemote lazy compiledSource={compileCode} />}
      <TagList tagList={blog.tags!} />
      <HorizontalRule />
    </div>
  );
};
