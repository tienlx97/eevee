import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type TocSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type TocProps = EeveeProps<Partial<TocSlots>> & {};

export type TocType = {
  depth: number;
  url: string;
  value: string;
};

export type TocState = EeveeState<TocSlots> & {
  tocClasses?: string;
  contentLinkHeadingClasses?: string;
  activeHeadingId?: string;
  headingsWithIds?: TocType[];
  toc?: TocType[];
};
