import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { PublishInSlots, PublishInState } from './PublishIn.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { tokens, breakPoints } from '@eevee/react-theme';

export const ClassName = 'eve-PublishIn';
export const ClassNames: SlotClassNames<PublishInSlots> = {
  root: 'eve-PublishIn',
  // TODO: add class names for all slots on PublishInSlots.
  // Should be of the form `<slotName>: 'eve-PublishIn__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    ...shorthands.borderBottom('1px', 'solid', tokens.b2),
  },

  // TODO add additional classes for different states and/or slots
  displayClassName: {
    display: 'flex',
    justifyContent: 'center',
  },

  mediaQueryClassName: {
    minWidth: 0,
    width: '100%',

    [`@media ${breakPoints.lgAndLarger}`]: {
      maxWidth: '800px',
      ...shorthands.margin(0, '30px'),
    },

    [`@media ${breakPoints.lg}`]: {
      maxWidth: '950px',
      ...shorthands.margin(0, '30px'),
    },

    [`@media ${breakPoints.md}`]: {
      maxWidth: '850px',
      ...shorthands.margin(0, '30px'),
    },

    [`@media ${breakPoints.sm}`]: {
      ...shorthands.margin(0, '15px'),
    },

    [`@media ${breakPoints.xs}`]: {
      ...shorthands.margin(0, '15px'),
    },
  },

  heightClassName: {
    height: '56px',
    alignItems: 'center',
    display: 'flex',
  },
});

/**
 * Apply styling to the PublishIn slots based on the state
 */
export const usePublishInStyles = (state: PublishInState): PublishInState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  state.displayClassName = styles.displayClassName;
  state.heightClassName = styles.heightClassName;
  state.mediaQueryClassName = styles.mediaQueryClassName;

  return state;
};
