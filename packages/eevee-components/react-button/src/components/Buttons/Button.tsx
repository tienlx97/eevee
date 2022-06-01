import * as React from 'react';
import { ButtonProps } from './Button.types';
import { renderButton_unstable } from './renderButton';
import { useButton_unstable } from './useButton';
// import { useButtonStyles_unstable } from './useButtonStyles';

/**
 * Buttons give people a way to trigger an action.
 */
const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const state = useButton_unstable(props, ref);

  // useButtonStyles_unstable(state);

  return renderButton_unstable(state);

  // Casting is required due to lack of distributive union to support unions on @types/react
});

// Button.displayName = 'Button';
export default Button;
