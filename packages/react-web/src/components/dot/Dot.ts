import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { DotProps } from './Dot.types';
import { renderDot } from './renderDot';
import { useDot } from './useDot';
import { useDotStyles } from './useDotStyles';

/**
 * Dot give people a way to trigger an action.
 */
export const Dot: ForwardRefComponent<DotProps> = React.forwardRef(
  (props: DotProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useDot(props, ref);

    useDotStyles(state);

    return renderDot(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<DotProps>;

Dot.displayName = 'Dot';
