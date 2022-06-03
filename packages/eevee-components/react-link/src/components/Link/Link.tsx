import * as React from 'react';
import type { LinkProps } from './Link.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { useLink } from './useLink';
import { useLinkStyles } from './useLinkStyles';
import { renderLink } from './renderLink';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Linka: ForwardRefComponent<LinkProps> = React.forwardRef(
  (props: LinkProps, ref: React.Ref<HTMLAnchorElement>) => {
    const state = useLink(props, ref);

    useLinkStyles(state);

    return renderLink(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<LinkProps>;

Linka.displayName = 'Link';
