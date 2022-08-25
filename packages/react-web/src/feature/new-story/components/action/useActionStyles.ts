import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { ActionSlots, ActionState } from './Action.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { tokens } from '@eevee/react-theme';

const ClassName = 'eve-Action';
const ClassNames: SlotClassNames<ActionSlots> = {
  root: 'eve-Action',
  // TODO: add class names for all slots on ActionSlots.
  // Should be of the form `<slotName>: 'eve-Action__<slotName>`
  publish: `${ClassName}__publish`,
  editOrPreview: `${ClassName}__editOrPreview`,
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  // TODO add additional classes for different states and/or slots
  button: {
    fontSize: tokens.fontSizeBase200,

    [`& .eve-Button__icon`]: {
      marginRight: '5px',
    },
  },

  spacing: {
    height: '12px',
    ...shorthands.borderRight('1px', 'solid', tokens.b1),
    ...shorthands.margin('0px', '8px'),
  },
});

/**
 * Apply styling to the Action slots based on the state
 */
export const useActionStyles = (state: ActionState): ActionState => {
  const styles = useStyles();

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  state.publish.className = mergeClasses(ClassNames.publish, styles.button, state.publish.className);
  state.editOrPreview.className = mergeClasses(ClassNames.editOrPreview, styles.button, state.editOrPreview.className);
  state.spacingClassName = styles.spacing;

  return state;
};
