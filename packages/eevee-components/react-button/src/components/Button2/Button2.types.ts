import * as React from 'react';
import type { EeveeProps, EeveeSlot, EeveeState } from '@eevee/react-utilities';

export type ButtonSlots2 = {
  root: NonNullable<EeveeSlot<'button'>>;
  iconAndText: NonNullable<EeveeSlot<'div'>>;
  text: NonNullable<EeveeSlot<'span'>>;
};

export type ButtonProps2 = EeveeProps<Partial<ButtonSlots2>> & {
  icon?: React.ReactNode;
};

export type ButtonState2 = EeveeState<ButtonSlots2> &
  Pick<ButtonProps2, 'icon'> & {
    /**
     * A button can contain only an icon.
     *
     * @default false
     */
    iconOnly: boolean;
  };
