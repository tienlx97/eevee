import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type PageNotFoundSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type PageNotFoundProps = ComponentProps<Partial<PageNotFoundSlots>> & {};

export type PageNotFoundState = ComponentState<PageNotFoundSlots> & {
  url?: string;
};
