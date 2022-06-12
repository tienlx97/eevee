import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type StrikeSlots = {
  root: NonNullable<EeveeSlot<'span'>>;
};

export type StrikeProps = EeveeProps<StrikeSlots> & {};

export type StrikeState = EeveeState<StrikeSlots> & {};
