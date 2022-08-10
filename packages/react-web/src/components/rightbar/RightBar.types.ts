import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type RightBarSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type RightBarProps = EeveeProps<Partial<RightBarSlots>> & {};

export type RightBarState = EeveeState<RightBarSlots> & {
  styles: string[];
};
