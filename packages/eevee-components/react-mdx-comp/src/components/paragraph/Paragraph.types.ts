import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type ParagraphSlots = {
  root: NonNullable<EeveeSlot<'p'>>;
};

export type ParagraphProps = EeveeProps<ParagraphSlots> & {
  original?: boolean;
};

export type ParagraphState = EeveeState<ParagraphSlots> & Pick<ParagraphProps, 'original'> & {};
