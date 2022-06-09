import * as React from 'react';
import { Link as Link6 } from 'react-router-dom';
import { getSlots } from '@eevee/react-utilities';
import type { LinkSlots2, LinkState2 } from './Link2.types';

/**
 * Renders a Link component by passing the state defined props to the appropriate slots.
 */
export const renderLink2 = (state: LinkState2) => {
  const { linkType, icon } = state;
  const { slots, slotProps } = getSlots<LinkSlots2>(state);
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
        {slots.iconAndText && (
          <slots.iconAndText {...slotProps.iconAndText}>
            {icon ? icon : <></>}
            {slots.text && <slots.text {...slotProps.text}>{children && children}</slots.text>}
          </slots.iconAndText>
        )}
      </Link6>
    );
  }

  return (
    <slots.root {...slotProps.root}>
      {slots.iconAndText && (
        <slots.iconAndText {...slotProps.iconAndText}>
          {icon ? icon : <></>}
          {slots.text && <slots.text {...slotProps.text}>{children && children}</slots.text>}
        </slots.iconAndText>
      )}
    </slots.root>
  );
};
