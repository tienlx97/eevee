import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { ButtonSlots2, ButtonState2 } from './Button2.types';

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */
export const renderButton2 = (state: ButtonState2) => {
  const { icon } = state;
  const { slots, slotProps } = getSlots<ButtonSlots2>(state);
  const { children, ...rest } = slotProps.root;

  return (
    <slots.root {...rest}>
      {slots.iconAndText && (
        <slots.iconAndText {...slotProps.iconAndText}>
          {icon && icon}
          {slots.text && <slots.text {...slotProps.text}>{children}</slots.text>}
        </slots.iconAndText>
      )}
    </slots.root>
  );
};
