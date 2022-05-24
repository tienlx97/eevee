// =========================== //

import { InPortal } from './src/inportal';
import { BaseWrapper, SideNote } from './src/sidenote';
import { Spinner } from './src/spinner';
import { Tooltip } from './src/tooltip';
import { Playground } from './src/playground';
import {
  ConfigContext,
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
} from './src/config-context';
import { useCssReset, useGlobalCss } from './src/global-styles';
import { Paragraph } from './src/paragraph';
import { InlineCode } from './src/inlinecode';
import { Em } from './src/em';
import { Blockquote } from './src/blockquote';
import { List } from './src/list';
import { PostImage } from './src/postimage';
import { PostLink } from './src/link';
import { ContentHeading } from './src/contentheading';
import { CodeSnippet } from './src/codesnippet';
import { VideoGif } from './src/videogif';
import { YoutubeEmbed } from './src/youtube-embed';
import { ContentContext, ContentProvider } from './src/content-context';
import { ContentFooterArticle } from './src/content-footer-article';
import { ContentFooter } from './src/content-footer-tutorial';
import { Divider } from './src/divider';
import { Heading } from './src/heading';
import { HorizontalRule } from './src/horizontalrule';
import { Strikethrough } from './src/strikethrough';
import { Asterisk } from './src/asterisk';

//
const R = {
  // UnstyledButton,
  // VisuallyHidden,

  ContentContext,
  ContentProvider,

  ConfigContext,
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,

  Asterisk,
  Blockquote,
  CodeSnippet,
  ContentFooterArticle,
  ContentFooter,
  ContentHeading,
  Divider,
  Em,
  Heading,
  HorizontalRule,
  InlineCode,
  PostLink,
  List,
  Paragraph,
  Playground,
  PostImage,
  SideNote,
  Strikethrough,
  VideoGif,
  YoutubeEmbed,
  Tooltip,

  Spinner,
  BaseWrapper,
  useCssReset,
  useGlobalCss,

  InPortal,
};

export default R;

export {
  // UnstyledButton,
  // VisuallyHidden,

  ContentContext,
  ContentProvider,
  ConfigContext,
  ConfigProvider,
  loadDefaultThemeBeforeReactRender,
  Blockquote,
  CodeSnippet,
  ContentFooterArticle,
  ContentFooter,
  ContentHeading,
  Divider,
  Em,
  Heading,
  HorizontalRule,
  InlineCode,
  PostLink,
  List,
  Paragraph,
  Playground,
  PostImage,
  SideNote,
  Strikethrough,
  VideoGif,
  YoutubeEmbed,
  Spinner,
  Tooltip,
  BaseWrapper,
  useCssReset,
  useGlobalCss,
  InPortal,
};
