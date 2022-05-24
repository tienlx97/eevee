/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  Blockquote,
  CodeSnippet,
  ContentFooter,
  ContentFooterArticle,
  ContentHeading,
  Divider,
  Em,
  HorizontalRule,
  InlineCode,
  List,
  Paragraph,
  Playground,
  PostImage,
  PostLink,
  SideNote,
  Strikethrough,
  VideoGif,
  YoutubeEmbed,
} from '@jolteon/components';
import {
  ILinkProps,
  IListProps,
  IEmProps,
  IContentHeading,
} from '@jolteon/components/types';
import { Asterisk } from '@jolteon/components/src/asterisk';

type Original = 'original';

type AProps = ILinkProps & {
  type?: Original;
};

const p = Paragraph;
const a = ({ type, ...props }: AProps) =>
  type === 'original' ? <a {...props} /> : <PostLink {...props} />;
const blockquote = Blockquote;
const ul = (props: IListProps) => <List {...props} type="unordered" />;
const ol = (props: IListProps) => <List {...props} type="ordered" />;
const li = List.ListItem;
const i = (props: React.HTMLAttributes<HTMLElement>) => <em {...props} />;
const em = (props: IEmProps) => <Em {...props} />;
const strike = Strikethrough;
const img = PostImage;
const inlineCode = InlineCode;
const code = CodeSnippet;
const h1 = (props: IContentHeading) => (
  <ContentHeading {...props} type="major-heading" />
);
const h2 = (props: IContentHeading) => (
  <ContentHeading {...props} type="normal-heading" />
);
const h3 = (props: IContentHeading) => (
  <ContentHeading {...props} type="minor-heading" />
);
const hr = HorizontalRule;

const r = {
  a,
  p,
  blockquote,
  strike,
  img,
  code,
  ul,
  ol,
  li,
  i,
  em,
  h1,
  h2,
  h3,
  hr,
  inlineCode,
  Asterisk,
  SideNote,
  VideoGif,
  YoutubeEmbed,
  Divider,
  Playground,
  ContentFooterArticle,
  ContentFooter,
};

export default r;

// export {
//   a as R_a,
//   p as R_p,
//   blockquote as R_blockquote,
//   strike as R_strike,
//   img as R_img,
//   code as R_code,
//   ul as R_ul,
//   ol as R_ol,
//   li as R_li,
//   i as R_i,
//   em as R_em,
//   h1 as R_h1,
//   h2 as R_h2,
//   h3 as R_h3,
//   hr as R_hr,
//   inlineCode,
//   Asterisk,
//   SideNote,
//   VideoGif,
//   YoutubeEmbed,
//   Divider,
//   Playground,
//   ContentFooterArticle,
//   ContentFooter,
// };
