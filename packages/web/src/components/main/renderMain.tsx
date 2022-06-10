import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';
import { Outlet } from 'react-router-dom';
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
          {slotProps.root.children}
          <div style={{ height: '500px' }}>1</div>
          <div style={{ height: '500px' }}>1</div>
          <div style={{ height: '500px' }}>1</div>
          <div style={{ height: '500px' }}>1</div>
          <div style={{ height: '500px' }}>1</div>
        </slots.content>
      </div>
    </slots.root>
  );
};
