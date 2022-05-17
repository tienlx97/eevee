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

export interface IStaticCodeWrapper extends IStaticCodeSnippet {
  // code: string;
  // lang: string;
  // clampMaxHeight: boolean;
  children?: React.ReactNode;
}

export interface ILiveCodeSnippet {
  lang: Language;
  code: string;
  inline?: boolean;
  scope: {
    [key: string]: any;
  };
  split?: string | [number, number];
}

export interface ICodeSnippet {
  live?: boolean; // specify ILiveCodeSnippet | IStaticCodeSnippet

  // common
  language?: Language;
  code: string;

  // IStaticCodeSnippet
  secretLive?: boolean;
  highlight?: string | HighlightItem[];
  lessBottomMargin?: boolean;
  clampMaxHeight?: boolean;

  // ILiveCodeSnippet
  inline?: boolean;
  scope?: {
    [key: string]: any;
  };
  split?: string | [number, number];
}
