import * as React from 'react';
import { ButtonProps, ButtonState, ButtonSlots } from './Button.types';

/**
 * Given user props, defines default props for the Button, calls useButtonState, and returns processed state.
 * @param props - User provided props to the Button component.
 * @param ref - User provided ref to be passed to the Button component.
 */
export const useButton_unstable = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>): ButtonState => {
  const {
    appearance = 'secondary',
    // eslint-disable-next-line deprecation/deprecation
    block = false,
    disabled = false,
    disabledFocusable = false,
    icon,
    iconPosition = 'before',
    shape = 'rounded',
    size = 'medium',
    ...rest
  } = props;

  return {
    // Props passed at the top-level
    appearance,
    block,
    disabled,
    disabledFocusable,
    iconPosition,
    shape,
    size,

    // State calculated from a set of props
    iconOnly: Boolean(icon && !props.children),

    // Slots definition
    components: {
      root: 'button',
      icon: 'span',
    },

    root: {
      ref,
      ...rest,
    },

    icon,
  };
};
