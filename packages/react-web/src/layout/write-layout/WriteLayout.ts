import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { WriteLayoutProps } from './WriteLayout.types';
import { renderWriteLayout } from './renderWriteLayout';
import { useWriteLayout } from './useWriteLayout';
import { useWriteLayoutStyles } from './useWriteLayoutStyles';

/**
 * WriteLayout give people a way to trigger an action.
 */
export const WriteLayout: ForwardRefComponent<WriteLayoutProps> = React.forwardRef(
  (props: WriteLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useWriteLayout(props, ref);

    useWriteLayoutStyles(state);

    return renderWriteLayout(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<WriteLayoutProps>;

WriteLayout.displayName = 'WriteLayout';
