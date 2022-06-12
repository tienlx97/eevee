import { EeveeSlot, EeveeProps, EeveeState } from '@eevee/react-utilities';

export type InlineCodeSlots = {
  root: NonNullable<EeveeSlot<'code'>>;
};

export type InlineCodeProps = EeveeProps<InlineCodeSlots> & {};

export type InlineCodeState = EeveeState<InlineCodeSlots> & {};
