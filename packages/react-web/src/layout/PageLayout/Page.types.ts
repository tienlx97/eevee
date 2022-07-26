import type { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type PageLayoutSlot = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type PageLayoutProps = EeveeProps<PageLayoutSlot> & {};

export type PageLayoutState = EeveeState<PageLayoutSlot> & {
  hide: boolean;
  commonMainLayout?: string;
};
