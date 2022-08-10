import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type BlurSystemSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type BlurSystemProps = EeveeProps<Partial<BlurSystemSlots>> & {};

export type BlurSystemState = EeveeState<BlurSystemSlots> & {};
