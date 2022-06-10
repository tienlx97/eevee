import type { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type PageSlot = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type PageProps = EeveeProps<PageSlot> & {};

export type PageState = EeveeState<PageSlot> & {
  hide: boolean;
};
