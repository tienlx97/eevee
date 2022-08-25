// import { ARIAButtonSlotProps } from '@eevee/react-aria';
import type { ComponentProps, ComponentState, Slot } from '@eevee/react-utilities';
import { Button } from '@eevee/react-button';

export type DialogTitleSlots = {
  /**
   * By default this is a div, but can be a heading.
   */
  root: Slot<'div', 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  closeButton?: Slot<typeof Button>;
};

/**
 * DialogTitle Props
 */
export type DialogTitleProps = ComponentProps<DialogTitleSlots> & {};

/**
 * State used in rendering DialogTitle
 */
export type DialogTitleState = ComponentState<DialogTitleSlots>;
