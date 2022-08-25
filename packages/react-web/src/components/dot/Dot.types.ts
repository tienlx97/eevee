import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type DotSlots = {
  root: NonNullable<Slot<'div'>>;
  text: NonNullable<Slot<'span'>>;
};

export type DotProps = ComponentProps<Partial<DotSlots>> & {};

export type DotState = ComponentState<DotSlots> & {};
