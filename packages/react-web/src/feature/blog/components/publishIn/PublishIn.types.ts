import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type PublishInSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type PublishInProps = EeveeProps<Partial<PublishInSlots>> & {};

export type PublishInState = EeveeState<PublishInSlots> & {
  displayClassName?: string;
  mediaQueryClassName?: string;
  heightClassName?: string;
};
