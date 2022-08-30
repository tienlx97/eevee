import * as React from 'react';
import { Link } from 'react-router-dom';
import { getSlots } from '@eevee/react-utilities';
import type { LinkSlots, LinkState } from './Link.types';

/**
 * Renders a Link component by passing the state defined props to the appropriate slots.
 */
export const renderLink = (state: LinkState) => {
  const { linkType, linkState } = state;
  const { slots, slotProps } = getSlots<LinkSlots>(state);
  const { target, rel, href, ref, children, ...rest } = slotProps.root;

  if (linkType === 'internal') {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement> | undefined}
        target={target}
        rel={rel}
        to={href as string}
        state={linkState ?? undefined}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
