import { makeStyles, mergeClasses } from '@griffel/react';
import type { EditorSlots, EditorState } from './Editor.types';
import type { SlotClassNames } from '@eevee/react-utilities';

const ClassName = 'eve-Editor';
const ClassNames: SlotClassNames<EditorSlots> = {
  root: 'eve-Editor',
  // TODO: add class names for all slots on EditorSlots.
  // Should be of the form `<slotName>: 'eve-Editor__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    height: '100%',
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the Editor slots based on the state
 */
export const useEditorStyles = (state: EditorState): EditorState => {
  const styles = useStyles();
  state.root.className = mergeClasses(ClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
