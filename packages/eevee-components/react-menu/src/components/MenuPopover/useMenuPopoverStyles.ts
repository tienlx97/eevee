import { shorthands, mergeClasses, makeStyles } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { MenuPopoverSlots, MenuPopoverState } from './MenuPopover.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const menuPopoverClassNames: SlotClassNames<MenuPopoverSlots> = {
  root: 'eve-MenuPopover',
};

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('4px'),
    backgroundColor: tokens.bg2,
    minWidth: '128px',
    maxWidth: '300px',
    width: 'max-content',
    boxShadow: tokens.shadow16,
    ...shorthands.padding('4px'),
    ...shorthands.border('1px', 'solid', 'transparent'),
  },
});

/**
 * Apply styling to the Menu slots based on the state
 */
export const useMenuPopoverStyles_unstable = (state: MenuPopoverState): MenuPopoverState => {
  const styles = useStyles();
  state.root.className = mergeClasses(menuPopoverClassNames.root, styles.root, state.root.className);
  return state;
};
