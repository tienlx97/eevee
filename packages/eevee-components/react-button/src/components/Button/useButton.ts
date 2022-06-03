import * as React from 'react';
import type { ButtonProps, ButtonState } from './Button.types';
import { resolveShorthand } from '@eevee/react-utilities';

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
    size = 'medium',

    // event
    onClick,
    onKeyDown,
    onKeyUp,

    ...rest
  } = props;

  const iconShorthand = resolveShorthand(icon);

  // const onClickHandler: ButtonProps['onClick'] = useEventCallback(ev => {
  //   if (disabled || disabledFocusable) {
  //     ev.preventDefault();
  //     ev.stopPropagation();
  //   } else {
  //     onClick?.(ev);
  //   }
  // });

  // const onKeydownHandler: ButtonProps['onKeyDown'] = useEventCallback(ev => {
  //   onKeyDown?.(ev);

  //   if (ev.isDefaultPrevented()) {
  //     return;
  //   }

  //   const key = ev.key;

  //   if ((disabled || disabledFocusable) && (key === 'Enter' || key === 'Space')) {
  //     ev.preventDefault();
  //     ev.stopPropagation();
  //     return;
  //   }

  //   if (key === 'Space') {
  //     ev.preventDefault();
  //     return;
  //   }

  //   // If enter is pressed, activate the button
  //   else if (key === 'Enter') {
  //     ev.preventDefault();
  //     ev.currentTarget.click();
  //   }
  // });

  // const onKeyupHandler: ButtonProps['onKeyUp'] = useEventCallback(ev => {
  //   onKeyUp?.(ev);

  //   if (ev.isDefaultPrevented()) {
  //     return;
  //   }

  //   const key = ev.key;

  //   if ((disabled || disabledFocusable) && (key === 'Enter' || key === 'Space')) {
  //     ev.preventDefault();
  //     ev.stopPropagation();
  //     return;
  //   }

  //   if (key === 'Space') {
  //     ev.preventDefault();
  //     ev.currentTarget.click();
  //   }
  // });

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

    root: {
      ref,
      'aria-disabled': disabledFocusable ? true : undefined,
      disabled: disabled && !disabledFocusable,
      onClick: disabledFocusable ? undefined : onClick,
      onKeyDown: disabledFocusable ? undefined : onKeyDown,
      onKeyUp: disabledFocusable ? undefined : onKeyUp,
      ...rest,
    },

    icon: iconShorthand,
  };
};
