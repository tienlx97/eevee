export interface CodeMap {
  markup?: string;
  css?: string;
  javascript?: string;
}

export interface ISnippetProps {
  id: string;
  codeMap: CodeMap;
  mode: string;
  centered?: boolean;
  boxSizing: string;
}
