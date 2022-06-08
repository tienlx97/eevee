import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';
import { Linkr } from '@eevee/react-link';

export type LinkIconSlots = {
  root: NonNullable<EeveeSlot<typeof Linkr>>;
  wrapper: NonNullable<EeveeSlot<'div'>>;
};

export type LinkIconProps = EeveeProps<LinkIconSlots> & {};

export type LinkIconState = EeveeState<LinkIconSlots> & {};
