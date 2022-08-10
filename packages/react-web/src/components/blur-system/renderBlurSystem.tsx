import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { BlurSystemState, BlurSystemSlots } from './BlurSystem.types';
import { Spinner } from '../spinner2/index';

/**
 * Render the final JSX of BlurSystem
 */
export const renderBlurSystem = (state: BlurSystemState) => {
  const { slots, slotProps } = getSlots<BlurSystemSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <Spinner />
    </slots.root>
  );
};
