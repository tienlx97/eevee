import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import { ListContext, ListSlots, ListState } from './List.types';

export const renderList = (state: ListState) => {
  const { type } = state;
  const { slots, slotProps } = getSlots<ListSlots>(state);

  return (
    <ListContext.Provider value={type}>
      {type === 'ordered' && <slots.ordered {...slotProps.ordered}>{slotProps.root.children}</slots.ordered>}
      {type === 'unordered' && <slots.unordered {...slotProps.unordered}>{slotProps.root.children}</slots.unordered>}
      {type === 'original' && <slots.original {...slotProps.original}>{slotProps.root.children}</slots.original>}
    </ListContext.Provider>
  );
};
