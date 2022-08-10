import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type MiddleLayoutSlots = {
  root: NonNullable<EeveeSlot<'main'>>;
};

export type MiddleLayoutProps = EeveeProps<Partial<MiddleLayoutSlots>> & {};

export type MiddleLayoutState = EeveeState<MiddleLayoutSlots> & {
  styles: string[];
};
