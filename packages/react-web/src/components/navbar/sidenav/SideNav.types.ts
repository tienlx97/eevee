import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';
// import { Top } from './top';

export type SideNavSlots = {
  root: NonNullable<Slot<'div'>>;
  content: NonNullable<Slot<'div'>>;
  // top: Slot<typeof Top>;
};

export type SideNavProps = ComponentProps<Partial<SideNavSlots>> & {};

export type SideNavState = ComponentState<SideNavSlots> & {};
