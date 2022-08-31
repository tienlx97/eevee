import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { CircleAvatarSlots, CircleAvatarState } from './CircleAvatar.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const ClassName = 'eve-CircleAvatar';
export const ClassNames: SlotClassNames<CircleAvatarSlots> = {
  root: 'eve-CircleAvatar',
  // TODO: add class names for all slots on CircleAvatarSlots.
  // Should be of the form `<slotName>: 'eve-CircleAvatar__<slotName>`
  img: 'eve-CircleAvatar__img',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  // TODO add additional classes for different states and/or slots
  link: {
    display: 'flex',
    flexDirection: 'row',
    color: 'inherit',
    width: 'max-content',
  },

  img: {
    ...shorthands.borderRadius('50%'),
  },
});

/**
 * Apply styling to the CircleAvatar slots based on the state
 */
export const useCircleAvatarStyles = (state: CircleAvatarState): CircleAvatarState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);
  state.img.className = mergeClasses(ClassNames.img, styles.img, state.img.className);
  state.linkClassName = styles.link;

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
