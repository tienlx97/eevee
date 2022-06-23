import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { TopNavSlots, TopNavState } from './TopNav.types';
import { ToggleTheme } from '../../toggleTheme/index';
import { LinkIcon } from '@eevee/react-link';
import { Face } from '../../icons/index';
/**
 * Render the final JSX of TopNav
 */
export const renderTopNav = (state: TopNavState) => {
  const { slots, slotProps } = getSlots<TopNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content}>
        <LinkIcon icon={<Face width={35} height={35} />} href="/home" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ToggleTheme />
        </div>
      </slots.content>
      <slots.gap {...slotProps.gap} />
    </slots.root>
  );
};
