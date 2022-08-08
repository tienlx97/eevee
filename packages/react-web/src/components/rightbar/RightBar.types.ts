import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type RightBarSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
};

type RouteMatch = 'blog' | 'home';

export type RightBarProps = EeveeProps<Partial<RightBarSlots>> & {};

export type RightBarState = EeveeState<RightBarSlots> & {
  slug?: string;

  routeMatch?: RouteMatch;
};
