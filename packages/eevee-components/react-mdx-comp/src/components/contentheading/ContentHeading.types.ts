import { Heading } from '../heading/index';
import type { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type ContentHeadingSlots = {
  root: NonNullable<Slot<'div'>>;
  heading: NonNullable<Slot<typeof Heading>>;
  anchor: NonNullable<Slot<'a'>>;
};

export type ContentHeadingProps = ComponentProps<Partial<ContentHeadingSlots>> & {
  showIcon?: boolean;
};

export type ContentHeadingState = ComponentState<ContentHeadingSlots> &
  Pick<ContentHeadingProps, 'showIcon'> & {
    iconClasses?: string;
  };
