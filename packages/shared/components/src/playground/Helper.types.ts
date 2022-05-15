import type { check, formatWithCursor, format } from 'prettier/standalone';
import type { parsers as htmlParsers } from 'prettier/parser-html';
import type { parsers as cssParsers } from 'prettier/parser-postcss';
import type { parsers as babelParsers } from 'prettier/parser-babel';
import { Dispatch, SetStateAction } from 'react';
import type { Language } from 'prism-react-renderer';

export interface JsPrettierState {
  check: typeof check;
  formatWithCursor: typeof formatWithCursor;
  format: typeof format;
}

export interface HTMLPrettierState {
  parsers: typeof htmlParsers;
}

export interface CssPrettierState {
  parsers: typeof cssParsers;
}

export interface BabelPrettierState {
  parsers: typeof babelParsers;
}

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

export interface IUsePrettierProps {
  htmlCode?: string;
  setHtmlCode: Dispatcher<string | undefined>;
  cssCode?: string;
  setCssCode: Dispatcher<string | undefined>;
  jsCode?: string;
  setJsCode: Dispatcher<string | undefined>;
}

export interface IUsePaneProps extends IUsePrettierProps {
  mode: string;
}

export interface PaneDataReturnProps {
  language: Language;
  label: string;
  code: string;
  handleUpdate: Dispatcher<string | undefined>;
}
