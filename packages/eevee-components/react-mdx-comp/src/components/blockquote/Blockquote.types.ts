import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type BlockquoteSlots = {
  root: NonNullable<EeveeSlot<'blockquote'>>;
};

export type BlockquoteProps = EeveeProps<BlockquoteSlots> & {};

export type BlockquoteState = EeveeState<BlockquoteSlots> & {};
