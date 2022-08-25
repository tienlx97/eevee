import { shorthands, makeStyles, mergeClasses } from '@griffel/react';
import { createArrowHeightStyles, createArrowStyles } from '@eevee/react-positioning';
import { tokens } from '@eevee/react-theme';
import type { PopoverSize } from '../Popover/Popover.types';
import type { PopoverSurfaceSlots, PopoverSurfaceState } from './PopoverSurface.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const popoverSurfaceClassNames: SlotClassNames<PopoverSurfaceSlots> = {
  root: 'fui-PopoverSurface',
};

export const arrowHeights: Record<PopoverSize, number> = {
  small: 6,
  medium: 8,
  large: 8,
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.bg2, // tokens.colorNeutralBackground1,
    fontFamily: tokens.fontFamily,
    boxShadow: tokens.shadow16,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.border('1px', 'solid', 'transparent'),
  },

  inverted: {
    // backgroundColor: tokens.f1  tokens.colorNeutralBackgroundStatic,
    // color: tokens.colorNeutralForegroundInvertedStatic,
  },

  brand: {
    // backgroundColor: tokens.colorBrandBackground,
    // color: tokens.colorNeutralForegroundOnBrand,
  },

  smallPadding: {
    ...shorthands.padding('12px'),
  },

  mediumPadding: {
    ...shorthands.padding('16px'),
  },

  largePadding: {
    ...shorthands.padding('20px'),
  },

  smallArrow: createArrowHeightStyles(arrowHeights.small),
  mediumLargeArrow: createArrowHeightStyles(arrowHeights.medium),
  arrow: createArrowStyles({ arrowHeight: undefined }),
});

/**
 * Apply styling to the PopoverSurface slots based on the state
 */
export const usePopoverSurfaceStyles_unstable = (state: PopoverSurfaceState): PopoverSurfaceState => {
  const styles = useStyles();
  state.root.className = mergeClasses(
    popoverSurfaceClassNames.root,
    styles.root,
    state.size === 'small' && styles.smallPadding,
    state.size === 'medium' && styles.mediumPadding,
    state.size === 'large' && styles.largePadding,
    state.appearance === 'inverted' && styles.inverted,
    state.appearance === 'brand' && styles.brand,
    state.root.className,
  );

  state.arrowClassName = mergeClasses(
    styles.arrow,
    state.size === 'small' ? styles.smallArrow : styles.mediumLargeArrow,
  );

  return state;
};
