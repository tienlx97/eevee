import * as React from 'react';
import { getSlots } from '@eevee/react-utilities';
import type { ActionState, ActionSlots } from './Action.types';
import { Layout } from './Layout';
import { DialogTrigger } from '@eevee/react-dialog';

/**
 * Render the final JSX of Action
 */
export const renderAction = (state: ActionState) => {
  const { spacingClassName } = state;
  const { slots, slotProps } = getSlots<ActionSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <Layout {...slotProps.root}>
      <DialogTrigger>
        <slots.publish {...slotProps.publish} />
      </DialogTrigger>
      <div className={spacingClassName} />
      <slots.editOrPreview {...slotProps.editOrPreview} />
    </Layout>
  );
};
