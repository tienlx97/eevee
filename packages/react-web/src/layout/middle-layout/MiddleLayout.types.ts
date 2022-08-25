import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type MiddleLayoutSlots = {
  root: NonNullable<Slot<'main'>>;
};

export type MiddleLayoutProps = ComponentProps<Partial<MiddleLayoutSlots>> & {};

export type MiddleLayoutState = ComponentState<MiddleLayoutSlots> & {
  styles: string[];
};
