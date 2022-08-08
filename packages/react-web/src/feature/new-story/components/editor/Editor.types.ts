import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type EditorSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type EditorProps = EeveeProps<Partial<EditorSlots>> & {
  initialDoc?: string;
  onChange?: (doc: string) => void;
};

export type EditorState = EeveeState<EditorSlots> & Pick<EditorProps, 'initialDoc' | 'onChange'> & {};
