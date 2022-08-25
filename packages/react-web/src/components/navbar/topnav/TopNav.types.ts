import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type TopNavSlots = {
  root: NonNullable<Slot<'div'>>;
  content: NonNullable<Slot<'div'>>; // top nav content here
  gap: NonNullable<Slot<'div'>>;
};

export type TopNavProps = ComponentProps<Partial<TopNavSlots>> & {};

export type TopNavState = ComponentState<TopNavSlots> & {};
