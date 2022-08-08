import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type DotSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  text: NonNullable<EeveeSlot<'span'>>;
};

export type DotProps = EeveeProps<Partial<DotSlots>> & {};

export type DotState = EeveeState<DotSlots> & {};
