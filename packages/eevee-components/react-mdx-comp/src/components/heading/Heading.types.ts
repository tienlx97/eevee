import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type HeadingSlots = {
  root: NonNullable<EeveeSlot<'h1', 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>>;
};

export type HeadingType =
  | 'section-title'
  | 'small-title'
  | 'medium-title'
  | 'large-title'
  | 'major-heading'
  | 'normal-heading'
  | 'minor-heading';

export type HeadingProps = EeveeProps<HeadingSlots> & {
  type?: HeadingType;
};

export type HeadingState = EeveeState<HeadingSlots> & Pick<HeadingProps, 'type'> & {};
