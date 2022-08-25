import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type RightBarSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type RightBarProps = ComponentProps<Partial<RightBarSlots>> & {};

export type RightBarState = ComponentState<RightBarSlots> & {
  styles: string[];
};
