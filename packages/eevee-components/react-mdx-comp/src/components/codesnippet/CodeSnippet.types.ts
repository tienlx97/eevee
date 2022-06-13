import * as React from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Language } from 'prism-react-renderer';

type HighlightItem = [start: number, end: number];

export interface StaticCodeSnippetProps {
  code: string;
  lang: Language;
  highlightedLines: HighlightItem[];
  secretLive?: boolean;
  clampMaxHeight: boolean;
  CodeWrapper?: any;
}

export interface StaticCodeWrapperProps extends StaticCodeSnippetProps {
  // code: string;
  // lang: string;
  // clampMaxHeight: boolean;
  children?: React.ReactNode;
}

export interface CodeSnippetProps {
  // common
  language?: Language;
  code: string;
  secretLive?: boolean;
  highlight?: string | HighlightItem[];
  lessBottomMargin?: boolean;
  clampMaxHeight?: boolean;
}
