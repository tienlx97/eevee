import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type BlurSystemSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type BlurSystemProps = ComponentProps<Partial<BlurSystemSlots>> & {};

export type BlurSystemState = ComponentState<BlurSystemSlots> & {};
