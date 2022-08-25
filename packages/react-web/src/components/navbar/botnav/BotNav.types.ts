import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type BotNavSlots = {
  // for media query
  root: NonNullable<Slot<'div'>>;
  // change position
  postition: NonNullable<Slot<'div'>>;
  // bot nav content here
  content: NonNullable<Slot<'div'>>;
};

export type BotNavProps = ComponentProps<Partial<BotNavSlots>> & {};

export type BotNavState = ComponentState<BotNavSlots> & {
  linkIconWrapperClassName?: string;
};
