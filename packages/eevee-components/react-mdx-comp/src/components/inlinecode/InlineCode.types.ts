import { Slot, ComponentProps, ComponentState } from '@eevee/react-utilities';

export type InlineCodeSlots = {
  root: NonNullable<Slot<'code'>>;
};

export type InlineCodeProps = ComponentProps<InlineCodeSlots> & {};

export type InlineCodeState = ComponentState<InlineCodeSlots> & {};
