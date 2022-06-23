import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type BlogSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type BlogProps = EeveeProps<Partial<BlogSlots>> & {};

export type BlogState = EeveeState<BlogSlots> & {};
