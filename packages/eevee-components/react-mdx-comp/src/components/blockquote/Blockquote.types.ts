import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type BlockquoteSlots = {
  root: NonNullable<Slot<'blockquote'>>;
};

export type BlockquoteProps = ComponentProps<BlockquoteSlots> & {};

export type BlockquoteState = ComponentState<BlockquoteSlots> & {};
