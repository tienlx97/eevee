import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type PageNotFoundSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type PageNotFoundProps = EeveeProps<Partial<PageNotFoundSlots>> & {};

export type PageNotFoundState = EeveeState<PageNotFoundSlots> & {
  url?: string;
};
