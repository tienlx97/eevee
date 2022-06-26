import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';

/**
 * Render the final JSX of Main
 */
export const renderMain = (state: MainState) => {
  const { flexCenterStyle } = state;
  const { slots, slotProps } = getSlots<MainSlots>(state);

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
