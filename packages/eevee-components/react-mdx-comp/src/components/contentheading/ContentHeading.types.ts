import { Heading } from '../heading/index';
import type { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type ContentHeadingSlots = {
  root: NonNullable<EeveeSlot<'div'>>;
  heading: NonNullable<EeveeSlot<typeof Heading>>;
  anchor: NonNullable<EeveeSlot<'a'>>;
};

export type ContentHeadingProps = EeveeProps<Partial<ContentHeadingSlots>> & {
  showIcon?: boolean;
};

export type ContentHeadingState = EeveeState<ContentHeadingSlots> &
  Pick<ContentHeadingProps, 'showIcon'> & {
    iconClasses?: string;
  };
