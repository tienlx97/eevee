import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { createFocusOutlineStyle } from '@eevee/react-tabster';
import { tokens } from '@eevee/react-theme';

import type { PopoverItemSlots, PopoverItemState } from './PopoverItem.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const menuItemClassNames: SlotClassNames<PopoverItemSlots> = {
  root: 'eve-MenuItem',
  content: 'eve-MenuItem__content',
};

const useStyles = makeStyles({
  focusIndicator: createFocusOutlineStyle(),
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    position: 'relative',
    color: tokens.f10,
    fontFamily: tokens.fontFamily,
    paddingRight: '10px',
    paddingLeft: '10px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    fontSize: tokens.fontSizeBase300,
    cursor: 'pointer',
    ...shorthands.gap('4px'),

    ':hover': {
      backgroundColor: tokens.b2,
      color: tokens.f1,
    },

    userSelect: 'none',
  },
  content: {
    paddingLeft: '2px',
    paddingRight: '2px',
    backgroundColor: 'transparent',
    flexGrow: 1,
  },

  disabled: {
    opacity: 0.7,
    color: tokens.fDisable,
    ':hover': {
      color: '#5c5c5c', // tokens.fDisable,
      backgroundColor: tokens.bgDisable,
    },

    ':focus': {
      color: tokens.fDisable,
    },
  },
});

/** Applies style classnames to slots */
export const usePopoverItemStyles = (state: PopoverItemState) => {
  const styles = useStyles();
  state.root.className = mergeClasses(
    menuItemClassNames.root,
    styles.root,
    styles.focusIndicator,
    state.disabled && styles.disabled,
    state.root.className,
  );

  if (state.content) {
    state.content.className = mergeClasses(menuItemClassNames.content, styles.content, state.content.className);
  }

  // useCheckmarkStyles_unstable(state as MenuItemCheckboxState);
};
