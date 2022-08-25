import type { ComponentProps, ComponentState, Slot } from '@eevee/react-utilities';

export type DialogBodySlots = {
  root: Slot<'div'>;
};

/**
 * DialogBody Props
 */
export type DialogBodyProps = ComponentProps<DialogBodySlots> & {};

/**
 * State used in rendering DialogBody
 */
export type DialogBodyState = ComponentState<DialogBodySlots>;
