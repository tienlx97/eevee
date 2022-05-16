/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Language } from 'prism-react-renderer';

export interface IStaticCodeSnippet {
  code: string;
  lang: Language | 'null';
  highlightedLines: any[];
  secretLive?: boolean;
  clampMaxHeight: boolean;
  CodeWrapper?: any;
}

export interface ICodeSnippet {
  children: string;
  // inline;
  live?: boolean;
  secretLive?: boolean;
  highlight?: any;
  // clickToReveal,
  // scope,
  // split,
  lessBottomMargin?: boolean;
  clampMaxHeight?: boolean;
  className?: string;
}

export interface IStaticCodeWrapper extends IStaticCodeSnippet {
  // code: string;
  // lang: string;
  // clampMaxHeight: boolean;
  children?: React.ReactNode;
}
