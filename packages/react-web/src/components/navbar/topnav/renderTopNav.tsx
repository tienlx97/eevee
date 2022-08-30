import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { Mimikyu, NotificationFill, NotificationRegular } from '@components/icons/index';
import { ToggleTheme } from '@components/toggleTheme/index';
import { LinkIcon } from '@eevee/react-link';

import { TopNavSlots, TopNavState } from './TopNav.types';
import { Link } from 'react-router-dom';

/**
 * Render the final JSX of TopNav
 */
export const renderTopNav = (state: TopNavState) => {
  const { slots, slotProps } = getSlots<TopNavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <slots.content {...slotProps.content}>
        <Link
          // style={{
          //   color: 'inherit',
          //   gap: '4px',
          //   display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
          to="/home"
        >
          <Mimikyu width={35} height={35} />
          {/* <h2 style={{ color: 'var(--f10)', fontFamily: 'var(--fontFamilySpicy)' }}>Mimikyu</h2> */}
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ToggleTheme />
        </div>
      </slots.content>
      <slots.gap {...slotProps.gap} />
    </slots.root>
  );
};
