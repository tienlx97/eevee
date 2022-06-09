import * as React from 'react';
import type { LinkProps2 } from './Link2.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import { useLink2 } from './useLink2';
import { useLinkStyles2 } from './useLinkStyles2';
import { renderLink2 } from './renderLink2';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const Link2: ForwardRefComponent<LinkProps2> = React.forwardRef(
  (props: LinkProps2, ref: React.Ref<HTMLAnchorElement>) => {
    const state = useLink2(props, ref);

    useLinkStyles2(state);

    return renderLink2(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<LinkProps2>;

Link2.displayName = 'Link2';
