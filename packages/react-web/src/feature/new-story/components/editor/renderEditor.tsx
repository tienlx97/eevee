import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { EditorState, EditorSlots } from './Editor.types';

/**
 * Render the final JSX of Editor
 */
export const renderEditor = (state: EditorState) => {
  const { slots, slotProps } = getSlots<EditorSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
