/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Language } from 'prism-react-renderer';

type HighlightItem = [start: number, end: number];

export interface IStaticCodeSnippet {
  code: string;
  lang: Language;
  highlightedLines: HighlightItem[];
  secretLive?: boolean;
  clampMaxHeight: boolean;
  CodeWrapper?: any;
}

export interface ICodeSnippet {
  code: string;
  // inline;
  live?: boolean;
  secretLive?: boolean;
  highlight?: string | HighlightItem[];
  // clickToReveal,
  // scope,
  // split,
  lessBottomMargin?: boolean;
  clampMaxHeight?: boolean;
  language?: Language;
}

export interface IStaticCodeWrapper extends IStaticCodeSnippet {
  // code: string;
  // lang: string;
  // clampMaxHeight: boolean;
  children?: React.ReactNode;
}
