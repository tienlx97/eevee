import { makeStyles, mergeClasses } from '@griffel/react';
import type { TocSlots, TocState } from './Toc.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { tokens } from '@eevee/react-theme';

export const ClassName = 'eve-Toc';
export const ClassNames: SlotClassNames<TocSlots> = {
  root: 'eve-Toc',
  // TODO: add class names for all slots on TocSlots.
  // Should be of the form `<slotName>: 'eve-Toc__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  toc: {
    color: tokens.f9,
    marginBottom: '16px',
  },

  contentLinkHeading: {
    display: 'block',
    color: tokens.f10,
    textDecorationLine: 'none',
    // fontSize: 'calc(var(--font-size-px) / 16 * 1rem)',
    '&:hover, &:focus': {
      // opacity: 1,
      color: tokens.f8,
      transitionProperty: 'opacity',
      transitionDuration: '0ms',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
    },
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the Toc slots based on the state
 */
export const useTocStyles = (state: TocState): TocState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  state.tocClasses = styles.toc;
  state.contentLinkHeadingClasses = styles.contentLinkHeading;

  return state;
};
