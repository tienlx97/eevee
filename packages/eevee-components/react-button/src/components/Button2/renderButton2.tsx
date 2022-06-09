import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { ButtonSlots2, ButtonState2 } from './Button2.types';

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */
export const renderButton2 = (state: ButtonState2) => {
  const { icon } = state;
  const { slots, slotProps } = getSlots<ButtonSlots2>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.iconAndText {...slotProps.iconAndText}>
        {icon && icon}
        <slots.text {...slotProps.text}>{slotProps.root.children}</slots.text>
      </slots.iconAndText>
    </slots.root>
  );
};
