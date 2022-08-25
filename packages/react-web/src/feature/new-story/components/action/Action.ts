import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { ActionProps } from './Action.types';
import { renderAction } from './renderAction';
import { useAction } from './useAction';
import { useActionStyles } from './useActionStyles';

/**
 * Action give people a way to trigger an action.
 */
export const Action: ForwardRefComponent<ActionProps> = React.forwardRef(
  (props: ActionProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useAction(props, ref);

    useActionStyles(state);

    return renderAction(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<ActionProps>;

Action.displayName = 'Action';
