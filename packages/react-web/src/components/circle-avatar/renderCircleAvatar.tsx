import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { CircleAvatarState, CircleAvatarSlots } from './CircleAvatar.types';
import { Link } from 'react-router-dom';

/**
 * Render the final JSX of CircleAvatar
 */
export const renderCircleAvatar = (state: CircleAvatarState) => {
  const { slots, slotProps } = getSlots<CircleAvatarSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <Link className={state.linkClassName} to="" rel="noopener follow">
        <slots.img {...slotProps.img} />
        {slotProps.root.children && slotProps.root.children}
      </Link>
    </slots.root>
  );
};
