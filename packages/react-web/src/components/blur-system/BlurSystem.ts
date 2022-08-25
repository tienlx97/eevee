import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { BlurSystemProps } from './BlurSystem.types';
import { renderBlurSystem } from './renderBlurSystem';
import { useBlurSystem } from './useBlurSystem';
import { useBlurSystemStyles } from './useBlurSystemStyles';

/**
 * BlurSystem give people a way to trigger an action.
 */
export const BlurSystem: ForwardRefComponent<BlurSystemProps> = React.forwardRef(
  (props: BlurSystemProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useBlurSystem(props, ref);

    useBlurSystemStyles(state);

    return renderBlurSystem(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<BlurSystemProps>;

BlurSystem.displayName = 'BlurSystem';
