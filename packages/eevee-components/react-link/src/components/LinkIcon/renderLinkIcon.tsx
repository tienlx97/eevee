import * as React from 'react';
import { Link } from 'react-router-dom';
import { getSlots } from '@eevee/react-utilities';
import type { LinkIconState, LinkIconSlots } from './LinkIcon.types';

/**
 * Renders a Link component by passing the state defined props to the appropriate slots.
 */
export const renderLinkIcon = (state: LinkIconState) => {
  const { linkType, compoundIcon: CompoundIcon, icon, isCurrentLoc } = state;
  const { slots, slotProps } = getSlots<LinkIconSlots>(state);
  const { target, rel, href, ref, children, ...rest } = slotProps.root;

  const LinkComp = (
    <>
      <slots.iconWrap {...slotProps.iconWrap}>
        {CompoundIcon && <CompoundIcon filled={isCurrentLoc ? 'true' : 'false'} />}
        {icon && icon}
        <slots.textWrap {...slotProps.textWrap}>{slotProps.root.children}</slots.textWrap>
      </slots.iconWrap>
    </>
  );

  if (linkType === 'internal') {
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement> | undefined} target={target} rel={rel} to={String(href)} {...rest}>
        {LinkComp}
      </Link>
    );
  }

  return <slots.root {...slotProps.root}>{LinkComp}</slots.root>;
};
