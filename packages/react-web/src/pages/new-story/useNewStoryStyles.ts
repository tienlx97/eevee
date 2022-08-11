import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { NewStorySlots, NewStoryState } from './NewStory.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints, tokens } from '@eevee/react-theme';
import { bottomHeight } from '@constants/css';

const ClassName = 'eve-NewStory';
const ClassNames: SlotClassNames<NewStorySlots> = {
  root: 'eve-NewStory',
  // TODO: add class names for all slots on NewStorySlots.
  // Should be of the form `<slotName>: 'eve-NewStory__<slotName>`
  hiddenButton: `${ClassName}__hiddenButton`,
  editor: `${ClassName}__Editor`,
  middleLayout: `${ClassName}__middleLayout`,
  rightLayout: `${ClassName}__rightLayout`,
  blurSystem: `${ClassName}__blurSystem`,
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    // width: 'inherit',
    // height: 'inherit',
    // flexDirection: 'row',
  },

  layout: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    // flexGrow: 0,
    // flexShrink: 0,
    // flexBasis: 'auto',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('hidden'),
  },

  // TODO add additional classes for different states and/or slots
});

const useAnotherStyles = makeStyles({
  titleGroup: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  topicGroup: {
    marginBottom: '16px',

    '& span': {
      fontWeight: 400,
      color: tokens.f2
    }
  },
  editor: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('auto'),
  },
  action: {
    position: 'fixed',
    alignSelf: 'center',
    justifySelf: 'center',

    [`@media ${breakPoints.lgAndLarger}`]: {
      bottom: '16px',
    },

    [`@media ${breakPoints.lg}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.md}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.sm}`]: {
      bottom: bottomHeight,
    },

    [`@media ${breakPoints.xs}`]: {
      bottom: bottomHeight,
    },
  }
});


const useHiddenStyles = makeStyles({
  root: {
    fontSize: tokens.fontSizeBase200,
    [`& .eve-Button__icon`]: {
      marginRight: '8px',
    },
  },
});

/**
 * Apply styling to the NewStory slots based on the state
 */
export const useNewStoryStyles = (state: NewStoryState): NewStoryState => {
  const styles = useStyles();
  const anotherStyles = useAnotherStyles();
  const hiddenStyles = useHiddenStyles();

  state.root.className = mergeClasses(ClassName, styles.layout, styles.root, state.root.className);

  state.hiddenButton.className = mergeClasses(ClassNames.hiddenButton, hiddenStyles.root, state.hiddenButton.className);

  Object.entries(anotherStyles).map(([key, value]) => state.styles.push(mergeClasses(`${ClassName}__${key}`, value)));

  return state;
};
