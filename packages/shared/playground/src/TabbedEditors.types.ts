import type { Language } from 'prism-react-renderer';
import { HTMLAttributes, Dispatch, SetStateAction } from 'react';

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

export interface PaneDataReturnProps {
  language: Language;
  label: string;
  code: string;
  handleUpdate: Dispatcher<string | undefined>;
}

export interface ITabbedEditorProps extends HTMLAttributes<HTMLDivElement> {
  paneData: PaneDataReturnProps[];
  maxHeight?: string;
  splitRatio: number;
  handleFormat: () => void;
}
