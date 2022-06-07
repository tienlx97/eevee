import * as React from 'react';
import type { ButtonProps, ButtonState } from './Button.types';
import { resolveShorthand, getNativeElementProps } from '@eevee/react-utilities';

/**
 * Given user props, defines default props for the Button, calls useButtonState, and returns processed state.
 * @param props - User provided props to the Button component.
 * @param ref - User provided ref to be passed to the Button component.
 */
export const useButton = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>): ButtonState => {
  const {
    appearance = 'transparent',
    as,
    disabled = false,
    disabledFocusable = false,
    icon,
    iconPosition = 'before',
    shape = 'rounded',
    size,

    // event
    onClick,
    onKeyDown,
    onKeyUp,

    ...rest
  } = props;

  const iconShorthand = resolveShorthand(icon);

  return {
    // Props passed at the top-level
    appearance,
    disabled,
    disabledFocusable,
    iconPosition,
    shape,
    size,

    // Slot define
    components: {
      root: 'button',
      icon: 'span',
    },
    //
    iconOnly: Boolean(iconShorthand?.children && !props.children),

    root: getNativeElementProps(as || 'button', {
      'aria-disabled': disabledFocusable ? true : undefined,
      disabled: disabled && !disabledFocusable,
      onClick: disabledFocusable ? undefined : onClick,
      onKeyDown: disabledFocusable ? undefined : onKeyDown,
      onKeyUp: disabledFocusable ? undefined : onKeyUp,
      ...rest,
    }),

    // root: {
    //   ref,
    //   'aria-disabled': disabledFocusable ? true : undefined,
    //   disabled: disabled && !disabledFocusable,
    //   onClick: disabledFocusable ? undefined : onClick,
    //   onKeyDown: disabledFocusable ? undefined : onKeyDown,
    //   onKeyUp: disabledFocusable ? undefined : onKeyUp,
    //   as,
    //   ...rest,
    // },

    icon: iconShorthand,
  };
};
