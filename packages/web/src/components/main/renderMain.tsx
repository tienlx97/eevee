import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { MainSlots, MainState } from './Main.types';

/**
 * Render the final JSX of Main
 */
export const renderMain = (state: MainState) => {
  const { slots, slotProps } = getSlots<MainSlots>(state);

  return <slots.root {...slotProps.root} />;
};
