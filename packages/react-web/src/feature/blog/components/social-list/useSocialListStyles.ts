import { makeStyles, mergeClasses } from '@griffel/react';
import type { SocialListSlots, SocialListState } from './SocialList.types';
import type { SlotClassNames } from '@eevee/react-utilities';

export const ClassName = 'eve-SocialList';
export const ClassNames: SlotClassNames<SocialListSlots> = {
  root: 'eve-SocialList',
  // TODO: add class names for all slots on SocialListSlots.
  // Should be of the form `<slotName>: 'eve-SocialList__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the SocialList slots based on the state
 */
export const useSocialListStyles = (state: SocialListState): SocialListState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
