import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditorView } from '@codemirror/view';

export type EditorSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type EditorProps = ComponentProps<Partial<EditorSlots>> & {
  initialDoc?: string;
  onChange?: (doc: string) => void;
  getEditorView?: (editorView: EditorView) => void;
};

export type EditorState = ComponentState<EditorSlots> &
  Pick<EditorProps, 'initialDoc' | 'onChange' | 'getEditorView'> & {};
