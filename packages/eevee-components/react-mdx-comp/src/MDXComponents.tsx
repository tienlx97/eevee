/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

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

import { ContentHeading, CH1, CH2, CH3 } from './ContentHeading';
import type { ContentHeadingProps } from './ContentHeading';

import { Heading, H1, H2, H3 } from './Heading';

import { HorizontalRule } from './HorizontalRule';

import { SideNote, Expanded } from './SideNote';

import { CodeBlock } from './CodeBlock';

const Strong = (strong: JSX.IntrinsicElements['strong']) => <strong style={{ fontWeight: 700 }} {...strong} />;

export const MDXComponents = {
  // a line is a <p /> tag
  p: (props: ParagraphProps) => <Paragraph {...props} />,
  // #
  h1: (props: ContentHeadingProps) => <CH1 {...props} />,
  // ##
  h2: (props: ContentHeadingProps) => <CH2 {...props} />,
  // ###
  h3: (props: ContentHeadingProps) => <CH3 {...props} />,
  // italic tag
  i: (props: JSX.IntrinsicElements['em']) => <em {...props} />,
  // *a*: em
  em: (props: EmProps) => <Em {...props} type="default" />,
  // **a**: strong
  strong: Strong,
  // ~~strike through~~
  del: (props: any) => {
    return <Strike {...props} />;
  },
  /*
  1. First item
  2. Second item
  */
  ol: (props: any) => <List {...props} type="ordered" />,

  /*
   [* - +] First item (recommend -)
   */
  ul: (props: any) => <List {...props} unordered={{ as: 'ul', props }} type="unordered" />,

  li: (props: any) => <ListItem {...props} />,

  // [tien](https://mdxjs.com/playground/)
  a: (props: TextLinkProps) => <TextLink {...props} />,

  img: (props: any) => <PostImage {...props} type="native" />,

  // > blockquote
  blockquote: (props: BlockquoteProps) => <Blockquote {...props} />,

  code: (props: any) => {
    // for backtick
    if (props.className) {
      const { children, ...rest } = props;
      return <CodeBlock children={children as string} {...rest} />;
    }
    // `inline code`
    return <InlineCode {...props} />;
  },

  pre: (preProps: any) => {
    if (preProps.highlight) {
      const { children, className = '' } = preProps.children.props;
      const matches = className.match(/language-(?<lang>.*)/);
      const prop = {
        fileName: preProps.filename,
        highlight: preProps.highlight,
        language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : undefined,
        className,
      };
      return (
        <div>
          <CodeBlock children={children as string} {...prop} />
        </div>
      );
    } else {
      return <pre {...preProps} />;
    }
  },

  // ***
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
  CH1,
  CH2,
  CH3,
  ContentHeading,
  Heading,
  H1,
  H2,
  H3,
  HorizontalRule,
  SideNote,
  Expanded,
  CodeBlock,
};
