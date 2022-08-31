import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type PageNotFoundSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type PageNotFoundProps = ComponentProps<Partial<PageNotFoundSlots>> & {
  from?: string;
};

export type PageNotFoundState = ComponentState<PageNotFoundSlots> &
  Pick<PageNotFoundProps, 'from'> & {
    url?: string;
  };
