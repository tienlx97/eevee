export interface CodeMap {
  markup?: string;
  css?: string;
  javascript?: string;
}

export interface SnippetProps {
  id: string;
  codeMap: CodeMap;
  mode: string;
  centered?: boolean;
  boxSizing: string;
}

export interface IResultProps extends SnippetProps {
  key: string;
  stretched?: boolean;
  layoutMode: string;
  isFullscreened?: boolean;
  appendClasses?: string;
}
