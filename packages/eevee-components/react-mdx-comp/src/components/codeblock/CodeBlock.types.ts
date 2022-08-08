export type MetaString = {
  fileName?: string;
  highlight?: string;
  language?: Language;
};

export type CodeBlockWrapperProps = {
  fileName?: string;
  highlight?: string;
  language?: Language;
  isFromPackageImport?: boolean;
  children: string;
  className?: string;
  noMargin?: boolean;
  noMarkers?: boolean;
}

export type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';

export type CodeBlockProps = {
  children: string;
  fileName?: string;
  highlight?: string;
  language?: Language;
  className?: string;
  noMargin?: boolean;
};

export type CodeBlockPropsV2 = {
  children: string;
  fileName?: string;
  highlight?: string;
  language?: Language;
  className?: string;
  noMargin?: boolean;
};
export interface InlineHiglight {
  step: number;
  line: number;
  startColumn: number;
  endColumn: number;
}

export type CodeBlockState = Pick<CodeBlockProps, 'children' | 'className' | 'fileName' | 'highlight' | 'language' | 'noMargin'> & {
  rootClasses?: string;
  inlineHiglightClasses?: string;

  bgBlue?: string;
  bgYellow?: string;
  bgGreen?: string;
  bgPurple?: string;

  filename?: string;
  decorators?: {
    className: string;
    line: number;
  }[];
};
