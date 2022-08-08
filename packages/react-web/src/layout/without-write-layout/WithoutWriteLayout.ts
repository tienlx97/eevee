import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { WithoutWriteLayoutProps } from './WithoutWriteLayout.types';
import { renderWithoutWriteLayout } from './renderWithoutWriteLayout';
import { useWithoutWriteLayout } from './useWithoutWriteLayout';
import { useWithoutWriteLayoutStyles } from './useWithoutWriteLayoutStyles';

/**
 * WithoutWriteLayout give people a way to trigger an action.
 */
export const WithoutWriteLayout: ForwardRefComponent<WithoutWriteLayoutProps> = React.forwardRef(
  (props: WithoutWriteLayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useWithoutWriteLayout(props, ref);

    useWithoutWriteLayoutStyles(state);

    return renderWithoutWriteLayout(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<WithoutWriteLayoutProps>;

WithoutWriteLayout.displayName = 'WithoutWriteLayout';
