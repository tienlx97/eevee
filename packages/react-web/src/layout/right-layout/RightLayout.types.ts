import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type RightLayoutSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type RightLayoutProps = ComponentProps<Partial<RightLayoutSlots>> & {};

export type RightLayoutState = ComponentState<RightLayoutSlots> & {
  styles: string[];
};
