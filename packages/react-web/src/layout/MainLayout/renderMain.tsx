import * as React from 'react';
import { Link } from 'react-router-dom';
import { getSlots } from '@eevee/react-utilities';
import { MainLayoutSlots, MainLayoutState } from './MainLayout.types';

/**
 * Render the final JSX of Main
 */
export const renderMainLayout = (state: MainLayoutState) => {
  const { flexCenterStyle } = state;
  const { slots, slotProps } = getSlots<MainLayoutSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      <div className={flexCenterStyle}>
        <slots.content {...slotProps.content}>
          {/* This is navigation render */}
          {slotProps.root.children}
        </slots.content>
      </div>
    </slots.root>
  );
};
