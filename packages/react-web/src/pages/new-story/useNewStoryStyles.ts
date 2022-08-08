import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { NewStorySlots, NewStoryState } from './NewStory.types';
import type { SlotClassNames } from '@eevee/react-utilities';
import { breakPoints, tokens } from '@eevee/react-theme';

const ClassName = 'eve-NewStory';
const ClassNames: SlotClassNames<NewStorySlots> = {
  root: 'eve-NewStory',
  // TODO: add class names for all slots on NewStorySlots.
  // Should be of the form `<slotName>: 'eve-NewStory__<slotName>`
  headerWrapper: '',
  documentTitleLabel: '',
  documentTitle: '',
  hiddenButton: '',
  editor: 'eve-NewStory-Editor',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    width: 'inherit',
    height: 'inherit',
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
    ...shorthands.borderBottom('1px', 'solid', tokens.b2),
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
  editorAndTabListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('hidden'),
  },

  editorWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('hidden'),
    fontSize: '17px',
  },

  editor: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    ...shorthands.overflow('auto'),
  },
});

/**
 * Apply styling to the NewStory slots based on the state
 */
export const useNewStoryStyles = (state: NewStoryState): NewStoryState => {
  const styles = useStyles();
  const headerStyles = useHeaderStyles();
  const editorStyles = useEditorStyles();

  state.root.className = mergeClasses(ClassName, styles.layout, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);
  state.headerWrapper.className = mergeClasses(headerStyles.root, state.headerWrapper.className);
  state.documentTitleLabel.className = mergeClasses(
    headerStyles.documentTitleLabel,
    state.documentTitleLabel.className,
  );
  state.documentTitle.className = mergeClasses(headerStyles.documentTitle, state.documentTitle.className);

  state.hiddenButton.style = {
    alignSelf: 'center',
    ...state.hiddenButton.style,
  };

  state.editorAndTabListWrapperClassName = editorStyles.editorAndTabListWrapper;
  state.editorWrapperClassName = editorStyles.editorWrapper;
  state.editorClassName = editorStyles.editor;

  state.editor.className = mergeClasses(ClassNames.editor, editorStyles.editor, state.editor.className);

  return state;
};
