import * as React from 'react';
import type { ForwardRefComponent } from '@eevee/react-utilities';
import type { LinkIconProps } from './Link.types';
import { useLinkIcon } from './useLinkIcon';
import { useLinkIconStyles } from './useLinkIconStyles';
import { renderLinkIcon } from './renderLinkIcon';

/**
 * A Link is a reference to data that a user can follow by clicking or tapping it.
 */
export const LinkIcon: ForwardRefComponent<LinkIconProps> = React.forwardRef(
  (props: LinkIconProps, ref: React.Ref<HTMLAnchorElement>) => {
    const state = useLinkIcon(props, ref);

    useLinkIconStyles(state);

    return renderLinkIcon(state);
    // Work around some small mismatches in inferred types which don't matter in practice
  },
) as ForwardRefComponent<LinkIconProps>;

LinkIcon.displayName = 'LinkIcon';
