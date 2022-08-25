import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type StrikeSlots = {
  root: NonNullable<Slot<'span'>>;
};

export type StrikeProps = ComponentProps<StrikeSlots> & {};

export type StrikeState = ComponentState<StrikeSlots> & {};
