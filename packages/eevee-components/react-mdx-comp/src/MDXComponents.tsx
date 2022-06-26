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

import { CodeSnippet } from './CodeSnippet';

import { ContentHeading, CH1, CH2, CH3 } from './ContentHeading';
import type { ContentHeadingProps } from './ContentHeading';

import { Heading, H1, H2, H3 } from './Heading';

import { HorizontalRule } from './HorizontalRule';

import { SideNote, Expanded } from './SideNote';

import { CodeBlock } from './CodeBlock';
import type { MetaString } from './CodeBlock';

// type PreProps = Partial<React.ReactHTMLElement<HTMLPreElement>['props']> & {
//   language: string;
//   codeString: string;
//   line?: string;
//   fileName?: string;
//   url?: string;
//   className: string;
// };

/**
 * Turns array elements into a type.
 *
 * `['name', 'email']` becomes `'name' | 'email'`
 */
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

/**
 * Returns an array of keys that matches the type `keyof T`
 *
 * @param object Any object.
 */
const keys = <T extends {}>(object: T): (keyof T)[] => {
  const objectKeys = Object.keys(object);

  return objectKeys.filter(key => object.hasOwnProperty(key)) as any;
};

const omit = <T extends {}, K extends (keyof T)[], P extends ArrayElement<K>>(object: T, fields: K): Omit<T, P> => {
  return keys(object).reduce<any>((obj, field) => {
    if (!fields.includes(field)) {
      obj[field] = object[field];
    }

    return obj;
  }, {});
};

const preToCodeBlock = (preProps: any) => {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props
  ) {
    // we have a <pre><code> situation
    const { children: codeString, className = '', ...props } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      metastring: {
        fileName: preProps.filename,
        highlight: preProps.highlight,
        language: matches && matches.groups && matches.groups.lang ? matches.groups.lang : undefined,
      } as MetaString,
      children: codeString.trim() as string,
      className,
      ...omit(props, ['children']),
    };
  }
};

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
  h1: (props: ContentHeadingProps) => <CH1 {...props} />,
  h2: (props: ContentHeadingProps) => <CH2 {...props} />,
  h3: (props: ContentHeadingProps) => <CH3 {...props} />,
  hr: HorizontalRule,
  code: ({ className, children, ...rest }: any) => <CodeBlock children={children as string} {...rest} />,
  // The code block renders <pre> so we just want a div here.
  // pre: ({ children, className, style, ...rest }: any) => (
  //   <div children={children} className={className} style={style} {...rest} />
  // ),

  pre: (preProps: Partial<React.ReactHTMLElement<HTMLPreElement>['props']>) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <CodeBlock {...props} />;
    }

    return <pre {...preProps} />;
  },

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
  CodeSnippet,
  HorizontalRule,
  SideNote,
  Expanded,
  CodeBlock,
};
