import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type MainLayoutSlots = {
  root: NonNullable<EeveeSlot<'main'>>;
  content: NonNullable<EeveeSlot<'div'>>;
};

export type MainLayoutProps = EeveeProps<Partial<MainLayoutSlots>> & {};

export type MainLayoutState = EeveeState<MainLayoutSlots> & {
  flexCenterStyle?: string;
};
