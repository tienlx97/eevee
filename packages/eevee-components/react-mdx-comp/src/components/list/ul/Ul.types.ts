import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type UlSlots = {
  root: NonNullable<Slot<'ul'>>;
};

export type UlProps = ComponentProps<UlSlots> & {};

export type UlState = ComponentState<UlSlots> & {};
