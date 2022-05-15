import type { Language } from 'prism-react-renderer';

export interface IEditorProps {
  code: string;
  language: Language;
  maxHeight?: string; // use vh
  handleFormat: () => void;
  handleUpdate: (value: string) => void;
}
