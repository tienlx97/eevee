import type { DialogTriggerState } from './DialogTrigger.types';

/**
 * Render the final JSX of MenuTrigger
 *
 * Only renders children
 */
export const renderDialogTrigger = (state: DialogTriggerState) => state.children;
