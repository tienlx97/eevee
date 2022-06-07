import * as React from 'react';
import { Link as Link6 } from 'react-router-dom';
import { getSlots } from '@eevee/react-utilities';
import type { LinkSlots, LinkState } from './Link.types';

/**
 * Renders a Link component by passing the state defined props to the appropriate slots.
 */
export const renderLink = (state: LinkState) => {
  const { linkType } = state;  
  const { slots, slotProps } = getSlots<LinkSlots>(state);
  const { target, rel, href, ref, children, ...rest } = slotProps.root;

  if (linkType === 'internal') {
    return (
      <Link6
        ref={ref as React.Ref<HTMLAnchorElement> | undefined}
        target={target}
        rel={rel}
        to={href as string}
        {...rest}
      >
        {slots.icon && <slots.icon {...slotProps.icon} />}
        {children && children}
      </Link6>
    );
  }

  return (
    <slots.root {...slotProps.root}>
      {slots.icon && <slots.icon {...slotProps.icon} />}
      {children && children}
    </slots.root>
  );
};
