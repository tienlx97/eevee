import * as React from 'react';
import { usePopoverTrigger_unstable } from './usePopoverTrigger';
import { renderPopoverTrigger_unstable } from './renderPopoverTrigger';
import type { EeveeTriggerComponent } from '@eevee/react-utilities';
import type { PopoverTriggerProps } from './PopoverTrigger.types';

/**
 * Wraps a trigger element as an only child and adds the necessary event handling to open a popover.
 */
export const PopoverTrigger: React.FC<PopoverTriggerProps> & EeveeTriggerComponent = props => {
  const state = usePopoverTrigger_unstable(props);

  return renderPopoverTrigger_unstable(state);
};

PopoverTrigger.displayName = 'PopoverTrigger';
PopoverTrigger.isEeveeTriggerComponent = true;
