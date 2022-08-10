import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { MiddleLayoutProps } from './MiddleLayout.types';
import { renderMiddleLayout } from './renderMiddleLayout';
import { useMiddleLayout } from './useMiddleLayout';
import { useMiddleLayoutStyles } from './useMiddleLayoutStyles';

/**
 * WriteLayout give people a way to trigger an action.
 */
export const MiddleLayout: ForwardRefComponent<MiddleLayoutProps> = React.forwardRef(
  (props: MiddleLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useMiddleLayout(props, ref);

    useMiddleLayoutStyles(state);

    return renderMiddleLayout(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<MiddleLayoutProps>;

MiddleLayout.displayName = 'MiddleLayout';
