export type MetaString = {
  fileName?: string;
  highlight?: string;
  language?: Language;
};

type Language =
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
  metastring?: MetaString;
  className?: string;
  noMargin?: boolean;
};

export interface InlineHiglight {
  step: number;
  line: number;
  startColumn: number;
  endColumn: number;
}

export type CodeBlockState = Pick<CodeBlockProps, 'children' | 'className' | 'metastring' | 'noMargin'> & {
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
