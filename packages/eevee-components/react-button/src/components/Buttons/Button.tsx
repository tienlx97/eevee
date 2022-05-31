import * as React from 'react';
import { renderButton_unstable } from './renderButton';
import { useButton_unstable } from './useButton';
import { useButtonStyles_unstable } from './useButtonStyles';
import type { ButtonProps } from './Button.types';

/**
 * Buttons give people a way to trigger an action.
 */
export const Button: React.FC<ButtonProps> = React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
  const state = useButton_unstable(props, ref);

  useButtonStyles_unstable(state);

  return renderButton_unstable(state);
  // Casting is required due to lack of distributive union to support unions on @types/react
});

Button.displayName = 'Button';
