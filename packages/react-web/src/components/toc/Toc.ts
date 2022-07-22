import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { TocProps } from './Toc.types';
import { renderToc } from './renderToc';
import { useToc } from './useToc';
import { useTocStyles } from './useTocStyles';

/**
 * Toc give people a way to trigger an action.
 */
export const Toc: ForwardRefComponent<TocProps> = React.forwardRef(
  (props: TocProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useToc(props, ref);

    useTocStyles(state);

    return renderToc(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<TocProps>;

Toc.displayName = 'Toc';
