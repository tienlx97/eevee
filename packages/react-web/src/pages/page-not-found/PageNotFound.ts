import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { PageNotFoundProps } from './PageNotFound.types';
import { renderPageNotFound } from './renderPageNotFound';
import { usePageNotFound } from './usePageNotFound';
import { usePageNotFoundStyles } from './usePageNotFoundStyles';

/**
 * PageNotFound give people a way to trigger an action.
 */
export const PageNotFound: ForwardRefComponent<PageNotFoundProps> = React.forwardRef(
  (props: PageNotFoundProps, ref: React.Ref<HTMLDivElement>) => {
    const state = usePageNotFound(props, ref);

    usePageNotFoundStyles(state);

    return renderPageNotFound(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<PageNotFoundProps>;

PageNotFound.displayName = 'PageNotFound';
