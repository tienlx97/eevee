import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { DotSlots, DotState } from './Dot.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { tokens } from '@eevee/react-theme';

export const ClassName = 'eve-Dot';
export const ClassNames: SlotClassNames<DotSlots> = {
  root: 'eve-Dot',
  // TODO: add class names for all slots on DotSlots.
  // Should be of the form `<slotName>: 'eve-Dot__<slotName>`
  text: 'eve-Dot__text',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    ...shorthands.padding('0', tokens.spacingHorizontalS),
  },

  dot: {
    color: tokens.f1,
  },
});

/**
 * Apply styling to the Dot slots based on the state
 */
export const useDotStyles = (state: DotState): DotState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);
  state.text.className = mergeClasses(ClassNames.text, styles.dot, state.text.className);

  return state;
};
