import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type RightSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type RightProps = EeveeProps<Partial<RightSlots>> & {};

export type RightState = EeveeState<RightSlots> & {};
