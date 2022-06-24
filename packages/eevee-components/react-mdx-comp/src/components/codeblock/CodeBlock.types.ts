export type CodeBlockProps = {
  children: string;
  metastring?: string;
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
