import * as React from 'react';
import type { ButtonProps2, ButtonState2 } from './Button2.types';
import { resolveShorthand, getNativeElementProps } from '@eevee/react-utilities';

/**
 * Given user props, defines default props for the Button, calls useButtonState22, and returns processed state.
 * @param props - User provided props to the Button component.
 * @param ref - User provided ref to be passed to the Button component.
 */
export const useButton2 = (props: ButtonProps2, ref: React.Ref<HTMLButtonElement>): ButtonState2 => {
  const {
    as,
    icon,
    text,
    iconAndText,

    ...rest
  } = props;

  const textShorthand = resolveShorthand(text, {
    defaultProps: {
      as: 'span',
    },
    required: true,
  });

  const iconAndTextShorthand = resolveShorthand(iconAndText, {
    defaultProps: {
      as: 'div',
    },
    required: true,
  });

  return {
    // Props passed at the top-level

    // Slot define
    components: {
      root: 'button',
      text: 'span',
      iconAndText: 'div',
    },
    //
    iconOnly: Boolean(icon && !props.children),

    root: getNativeElementProps(as || 'button', {
      ...rest,
    }),

    text: textShorthand,
    iconAndText: iconAndTextShorthand,
    icon,
  };
};
