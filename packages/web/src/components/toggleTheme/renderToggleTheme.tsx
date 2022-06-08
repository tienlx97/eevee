import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ToggleThemeSlot, ToggleThemeState } from './ToggleTheme.types';

export const renderToggleTheme = (state: ToggleThemeState) => {
  const { slots, slotProps } = getSlots<ToggleThemeSlot>(state);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
