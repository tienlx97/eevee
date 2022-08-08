import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type WriteLayoutSlots = {
  root: NonNullable<EeveeSlot<'main'>>;
};

export type WriteLayoutProps = EeveeProps<Partial<WriteLayoutSlots>> & {};

export type WriteLayoutState = EeveeState<WriteLayoutSlots> & {};
