import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type UlSlots = {
  root: NonNullable<EeveeSlot<'ul'>>;
};

export type UlProps = EeveeProps<UlSlots> & {};

export type UlState = EeveeState<UlSlots> & {};
