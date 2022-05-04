import { Dispatch, SetStateAction } from 'react';

import type { check, formatWithCursor, format } from 'prettier/standalone';
import type { parsers as htmlParsers } from 'prettier/parser-html';
import type { parsers as cssParsers } from 'prettier/parser-postcss';
import type { parsers as babelParsers } from 'prettier/parser-babel';

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

type UsePrettierProps = {
  htmlCode: string;
  setHtmlCode: Dispatcher<string>;
  cssCode: string;
  setCssCode: Dispatcher<string>;
  jsCode: string;
  setJsCode: Dispatcher<string>;
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

export {
  UsePrettierProps,
  JsPrettierState,
  HTMLPrettierState,
  BabelPrettierState,
  CssPrettierState,
  UsePaneProps,
};
