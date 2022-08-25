import type { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type PageLayoutSlot = {
  root: NonNullable<Slot<'div'>>;
};

export type PageLayoutProps = ComponentProps<PageLayoutSlot> & {};

export type PageLayoutState = ComponentState<PageLayoutSlot> & {};
