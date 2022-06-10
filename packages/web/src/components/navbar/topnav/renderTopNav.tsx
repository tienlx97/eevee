import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { TopNavSlots, TopNavState } from './TopNav.types';
import { ToggleTheme } from '../../toggleTheme/index';
import { LinkR } from '@eevee/react-link';

/**
 * Render the final JSX of TopNav
 */
export const renderTopNav = (state: TopNavState) => {
  const { slots, slotProps } = getSlots<TopNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content}>
        <LinkR
          href="/"
          icon={
            <img
              width={30}
              src="https://raw.githubusercontent.com/lexuantien/eevee/dev/resource/image/icon-512x512.png"
            />
          }
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ToggleTheme />
        </div>
      </slots.content>
      <slots.gap {...slotProps.gap} />
    </slots.root>
  );
};
