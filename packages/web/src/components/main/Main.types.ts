import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type MainSlots = {
  root: NonNullable<EeveeSlot<'main'>>;
};

export type MainProps = EeveeProps<Partial<MainSlots>> & {};

export type MainState = EeveeState<MainSlots> & {};
