import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react';

import type { check, formatWithCursor, format } from 'prettier/standalone';
import type { parsers as htmlParsers } from 'prettier/parser-html';
import type { parsers as cssParsers } from 'prettier/parser-postcss';
import type { parsers as babelParsers } from 'prettier/parser-babel';

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

type UsePrettierProps = {
  htmlCode?: string;
  setHtmlCode: Dispatcher<string | undefined>;
  cssCode?: string;
  setCssCode: Dispatcher<string | undefined>;
  jsCode?: string;
  setJsCode: Dispatcher<string | undefined>;
};

type UsePaneProps = UsePrettierProps & {
  mode: string;
};

type JsPrettierState = {
  check: typeof check;
  formatWithCursor: typeof formatWithCursor;
  format: typeof format;
};

type HTMLPrettierState = {
  parsers: typeof htmlParsers;
};

type CssPrettierState = {
  parsers: typeof cssParsers;
};

type BabelPrettierState = {
  parsers: typeof babelParsers;
};

type Display = 'none' | 'inline' | 'block' | 'inline-block';

type ButtonProps = {
  display?: Display;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle: any;
  children?: React.ReactNode;
  onclick?: (event: BaseSyntheticEvent) => void;
  onMouseEnter?: (event: SyntheticEvent) => void;
  onMouseLeave?: (event: SyntheticEvent) => void;
  ref?: React.LegacyRef<HTMLDivElement>;
};

type CodeMap = {
  markup?: string;
  css?: string;
  javascript?: string;
};

type SnippetProps = {
  id: string;
  codeMap: CodeMap;
  mode: string;
  centered?: boolean;
  boxSizing: string;
};

type PaneProps = {
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle: any;
};

type ResultProps = SnippetProps & {
  key: string;
  stretched?: boolean;
  layoutMode: string;
  isFullscreened?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xstyle: any;
};

type ResreshButtonProps = {
  handleRefresh: (event: BaseSyntheticEvent) => void;
};

export {
  UsePrettierProps,
  JsPrettierState,
  HTMLPrettierState,
  BabelPrettierState,
  CssPrettierState,
  UsePaneProps,
  Display,
  ButtonProps,
  ResultProps,
  CodeMap,
  SnippetProps,
  PaneProps,
  ResreshButtonProps,
};
