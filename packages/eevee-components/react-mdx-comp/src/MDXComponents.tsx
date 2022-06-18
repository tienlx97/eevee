import * as React from 'react';

import { SandPack } from './SandPack';
import { Paragraph } from './Paragraph';
import type { ParagraphProps } from './Paragraph';

import { TextLink } from '@eevee/react-link';
import type { TextLinkProps } from '@eevee/react-link';

import { Blockquote } from './Blockquote';
import type { BlockquoteProps } from './Blockquote';

import { List, Ol, Ul } from './List';
// import type { ListProps } from './List';

import { ListItem, Li } from './ListItem';

import { Em } from './Em';
import type { EmProps } from './Em';

import { Strike } from './Strike';

import { PostImage } from './PostImage';

import { InlineCode } from './InlineCode';

import { CodeSnippet } from './CodeSnippet';

import { ContentHeading, H1, H2, H3 } from './ContentHeading';
import type { ContentHeadingProps } from './ContentHeading';

import { HorizontalRule } from './HorizontalRule';

export const MDXComponents = {
  p: (props: ParagraphProps) => <Paragraph {...props} />,
  a: (props: TextLinkProps) => <TextLink {...props} />,
  blockquote: (props: BlockquoteProps) => <Blockquote {...props} />,
  ul: (props: JSX.IntrinsicElements['ul']) => <List unordered={{ as: 'ul', props }} type="unordered" />,
  ol: (props: JSX.IntrinsicElements['ol']) => <List ordered={{ as: 'ol', props }} type="ordered" />,
  li: ({ ref, ...props }: JSX.IntrinsicElements['li']) => <ListItem {...props} />,
  i: (props: JSX.IntrinsicElements['em']) => <em {...props} />,
  em: (props: EmProps) => <Em {...props} type="default" />,
  strike: Strike,
  inlineCode: InlineCode,
  // // code: CodeSnippet,
  h1: (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'major-heading' }} />,
  h2: (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'normal-heading' }} />,
  h3: (props: ContentHeadingProps) => <ContentHeading {...props} heading={{ type: 'minor-heading' }} />,
  hr: HorizontalRule,
  // =======
  Paragraph,
  TextLink,
  Blockquote,
  Ul,
  Ol,
  Li,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  I: (props: JSX.IntrinsicElements['em']) => <em {...props} />,
  Em,
  PostImage,
  Strike,
  InlineCode,
  H1,
  H2,
  H3,
  CodeSnippet,
  SandPack,
  HorizontalRule,
};
