import { ForwardRefComponent } from '@eevee/react-utilities';
import * as React from 'react';
import type { ButtonProps } from './Button.types';
import { renderButton } from './renderButton';
import { useButton } from './useButton';
import { useButtonStyles } from './useButtonStyles';

/**
 * Buttons give people a way to trigger an action.
 */
export const Button: ForwardRefComponent<ButtonProps> = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const state = useButton(props, ref);

    useButtonStyles(state);

    return renderButton(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<ButtonProps>;

Button.displayName = 'Button';
