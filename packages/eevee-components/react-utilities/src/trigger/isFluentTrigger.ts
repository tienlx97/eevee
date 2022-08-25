import * as React from 'react';
import { EeveeTriggerComponent } from './types';

/**
 * Checks if a given element is a FluentUI trigger (e.g. `MenuTrigger` or `Tooltip`).
 * See the {@link EeveeTriggerComponent} type for more info.
 */
export const isFluentTrigger = (element: React.ReactElement) => {
  return (element.type as EeveeTriggerComponent).isEeveeTriggerComponent;
};
