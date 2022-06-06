import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type TopNavSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  content: NonNullable<EeveeSlot<'div'>>; // top nav content here
};

export type TopNavProps = EeveeProps<Partial<TopNavSlots>> & {};

export type TopNavState = EeveeState<TopNavSlots> & {};
