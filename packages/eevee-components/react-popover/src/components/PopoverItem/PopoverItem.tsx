import * as React from 'react';
import { usePopoverItem } from './usePopoverItem';
import { renderPopoverItem } from './renderPopoverItem';
import { usePopoverItemStyles } from './usePopoverItemStyles';
import type { PopoverItemProps } from './PopoverItem.types';
import type { ForwardRefComponent } from '@eevee/react-utilities';

/**
 * Define a styled MenuItem, using the `useMenuItem_unstable` and `useMenuItemStyles_unstable` hook.
 */
export const PopoverItem: ForwardRefComponent<PopoverItemProps> = React.forwardRef((props, ref) => {
  const state = usePopoverItem(props, ref);

  usePopoverItemStyles(state);
  return renderPopoverItem(state);
});

PopoverItem.displayName = 'PopoverItem';
