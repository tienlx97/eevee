import * as React from 'react';
import { ResetButtonState, ResetButtonSlots } from './ResetButton.types';
import { getSlots } from '@eevee/react-utilities';
import { IconRestart } from '../icons/index';

export const renderResetButton = (state: ResetButtonState) => {
  const { iconClasses } = state;
  const { slots, slotProps } = getSlots<ResetButtonSlots>(state);
  return (
    <slots.root {...slotProps.root}>
      <IconRestart className={iconClasses} /> Reset
    </slots.root>
  );
};
