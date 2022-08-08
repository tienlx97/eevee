import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type WithoutWriteLayoutSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

export type WithoutWriteLayoutProps = EeveeProps<Partial<WithoutWriteLayoutSlots>> & {};

export type WithoutWriteLayoutState = EeveeState<WithoutWriteLayoutSlots> & {
  hide: boolean;
  commonMainLayout?: string;
  centerClassName?: string;
  displayCenterClassName?: string;
  fixContentClassName?: string;
};
