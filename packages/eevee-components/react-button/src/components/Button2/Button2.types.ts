import * as React from 'react';
import type { ComponentProps, Slot, ComponentState } from '@eevee/react-utilities';

export type ButtonSlots2 = {
  root: NonNullable<Slot<'button'>>;
  iconAndText: NonNullable<Slot<'div'>>;
  text: NonNullable<Slot<'span'>>;
};

export type ButtonProps2 = ComponentProps<Partial<ButtonSlots2>> & {
  icon?: React.ReactNode;
};

export type ButtonState2 = ComponentState<ButtonSlots2> &
  Pick<ButtonProps2, 'icon'> & {
    /**
     * A button can contain only an icon.
     *
     * @default false
     */
    iconOnly: boolean;
  };
