import { ForwardRefComponent } from '@eevee/react-utilities';
import * as React from 'react';
import type { ButtonProps2 } from './Button2.types';
import { renderButton2 } from './renderButton2';
import { useButton2 } from './useButton2';
import { useButtonStyles2 } from './useButtonStyles2';

/**
 * Buttons give people a way to trigger an action.
 */
export const Button2: ForwardRefComponent<ButtonProps2> = React.forwardRef(
  (props: ButtonProps2, ref: React.Ref<HTMLButtonElement>) => {
    const state = useButton2(props, ref);

    useButtonStyles2(state);

    return renderButton2(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<ButtonProps2>;

Button2.displayName = 'Button2';
