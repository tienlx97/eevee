import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';
import { Top } from './top';

export type SideNavSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  content: NonNullable<EeveeSlot<'div'>>;
  top: EeveeSlot<typeof Top>;
};

export type SideNavProps = EeveeProps<Partial<SideNavSlots>> & {};

export type SideNavState = EeveeState<SideNavSlots> & {};
