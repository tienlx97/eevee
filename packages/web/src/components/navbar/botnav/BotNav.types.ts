import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type BotNavSlots = {
  // for media query
  root: NonNullable<EeveeSlot<'div'>>;
  // change position
  postition: NonNullable<EeveeSlot<'div'>>;
  // bot nav content here
  content: NonNullable<EeveeSlot<'div'>>;
};

export type BotNavProps = EeveeProps<Partial<BotNavSlots>> & {};

export type BotNavState = EeveeState<BotNavSlots> & {
  linkIconWrapperClassName?: string;
};
