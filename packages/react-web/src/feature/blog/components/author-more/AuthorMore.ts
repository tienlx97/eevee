import * as React from 'react';
import { ForwardRefComponent } from '@eevee/react-utilities';
import type { AuthorMoreProps } from './AuthorMore.types';
import { renderAuthorMore } from './renderAuthorMore';
import { useAuthorMore } from './useAuthorMore';
import { useAuthorMoreStyles } from './useAuthorMoreStyles';

/**
 * AuthorMore give people a way to trigger an action.
 */
export const AuthorMore: ForwardRefComponent<AuthorMoreProps> = React.forwardRef(
  (props: AuthorMoreProps, ref: React.Ref<HTMLDivElement>) => {
    const state = useAuthorMore(props, ref);

    useAuthorMoreStyles(state);

    return renderAuthorMore(state);
  },
  // Casting is required due to lack of distributive union to support unions on @types/react
) as ForwardRefComponent<AuthorMoreProps>;

AuthorMore.displayName = 'AuthorMore';
