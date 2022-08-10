import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type RightLayoutSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type RightLayoutProps = EeveeProps<Partial<RightLayoutSlots>> & {};

export type RightLayoutState = EeveeState<RightLayoutSlots> & {
  styles: string[];
};
