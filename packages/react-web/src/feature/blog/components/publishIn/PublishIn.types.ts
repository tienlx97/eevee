import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type PublishInSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type PublishInProps = ComponentProps<Partial<PublishInSlots>> & {};

export type PublishInState = ComponentState<PublishInSlots> & {
  displayClassName?: string;
  mediaQueryClassName?: string;
  heightClassName?: string;
};
