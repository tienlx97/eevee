import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type ParagraphSlots = {
  root: NonNullable<Slot<'p'>>;
};

export type ParagraphProps = ComponentProps<ParagraphSlots> & {
  original?: boolean;
};

export type ParagraphState = ComponentState<ParagraphSlots> & Pick<ParagraphProps, 'original'> & {};
