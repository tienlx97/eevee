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
  headerWrapper: `${ClassName}__headerWrapper`,
  documentTitleLabel: `${ClassName}__documentTitleLabel`,
  documentTitle: `${ClassName}__documentTitle`,
  hiddenButton: `${ClassName}__hiddenButton`,
  editor: 'eve-NewStory-Editor',
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
    width: 'inherit',
    height: 'inherit',
    flexDirection: 'row',
  },

  layout: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('hidden'),
  },

  // TODO add additional classes for different states and/or slots
});

const useHeaderStyles = makeStyles({
  root: {
    // ...shorthands.borderBottom('1px', 'groove', tokens.b2),
    position: 'relative',
    display: 'flex',
    // ...shorthands.padding('0', '16px'),
    flexDirection: 'row',
  },

  documentTitleLabel: {
    lineHeight: '1rem',
    fontSize: '.8rem',
    marginBottom: '.77999rem',
    paddingTop: '.22001rem',
    fontWeight: '500',
    color: tokens.f8,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginTop: '1rem',
  },

  documentTitle: {
    borderTopColor: 'initial',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    backgroundColor: 'transparent',
    lineHeight: '1rem',
    fontSize: '1.25rem',
    marginBottom: '.3rem',
    paddingTop: '.10001rem',
    fontWeight: '400',
    color: tokens.f1,
    width: '100%',
  },
});

const useEditorStyles = makeStyles({
  editor: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('auto'),
  },
});

const useActionStyles = makeStyles({
  root: {
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
  },
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
  const headerStyles = useHeaderStyles();
  const editorStyles = useEditorStyles();
  const actionStyles = useActionStyles();
  const hiddenStyles = useHiddenStyles();

  state.root.className = mergeClasses(ClassName, styles.layout, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  state.headerWrapper.className = mergeClasses(headerStyles.root, state.headerWrapper.className);
  state.documentTitleLabel.className = mergeClasses(
    headerStyles.documentTitleLabel,
    state.documentTitleLabel.className,
  );
  state.documentTitle.className = mergeClasses(headerStyles.documentTitle, state.documentTitle.className);

  state.editorClassName = editorStyles.editor;

  state.editor.className = mergeClasses(ClassNames.editor, editorStyles.editor, state.editor.className);

  state.hiddenButton.className = mergeClasses(ClassNames.hiddenButton, hiddenStyles.root, state.hiddenButton.className);

  state.actionClassName = mergeClasses('eve-NewStory__action', actionStyles.root);
  return state;
};
