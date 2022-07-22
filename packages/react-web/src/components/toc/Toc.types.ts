import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';
import type { Toc } from 'typings/my-mdx/index';

export type TocSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type TocProps = EeveeProps<Partial<TocSlots>> & {
  toc: Toc[];
};

export type TocState = EeveeState<TocSlots> &
  Required<Pick<TocProps, 'toc'>> & {
    tocClasses?: string;
    contentLinkHeadingClasses?: string;
    activeHeadingId?: string;
    headingsWithIds?: Toc[];
  };
