import { mergeClasses, makeStyles, shorthands } from '@griffel/react';
import { createFocusOutlineStyle } from '@eevee/react-tabster';
import { tokens } from '@eevee/react-theme';

import type { MenuItemSlots, MenuItemState } from './MenuItem.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const menuItemClassNames: SlotClassNames<MenuItemSlots> = {
  root: 'eve-MenuItem',
  icon: 'eve-MenuItem__icon',
  content: 'eve-MenuItem__content',
  secondaryContent: 'eve-MenuItem__secondaryContent',
};

const useStyles = makeStyles({
  focusIndicator: createFocusOutlineStyle(),
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    position: 'relative',
    color: tokens.f2,
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
  secondaryContent: {
    paddingLeft: '2px',
    paddingRight: '2px',
    color: tokens.f2,
    ':hover': {
      color: tokens.f1,
    },
    ':focus': {
      color: tokens.f1,
    },
  },
  icon: {
    width: '20px',
    height: '20px',
    fontSize: '20px',
    lineHeight: 0,
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
  },

  disabled: {
    color: tokens.fDisable,
    ':hover': {
      color: tokens.fDisable,
    },

    ':focus': {
      color: tokens.fDisable,
    },
  },
});

/** Applies style classnames to slots */
export const useMenuItemStyles_unstable = (state: MenuItemState) => {
  const styles = useStyles();
  state.root.className = mergeClasses(
    menuItemClassNames.root,
    styles.root,
    styles.focusIndicator,
    // state.disabled && styles.disabled,
    state.root.className,
  );

  if (state.content) {
    state.content.className = mergeClasses(menuItemClassNames.content, styles.content, state.content.className);
  }

  if (state.secondaryContent) {
    state.secondaryContent.className = mergeClasses(
      menuItemClassNames.secondaryContent,
      !state.disabled && styles.secondaryContent,
      state.secondaryContent.className,
    );
  }

  if (state.icon) {
    state.icon.className = mergeClasses(menuItemClassNames.icon, styles.icon, state.icon.className);
  }

  // useCheckmarkStyles_unstable(state as MenuItemCheckboxState);
};
