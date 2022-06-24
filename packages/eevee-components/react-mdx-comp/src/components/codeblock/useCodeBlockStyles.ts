import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';
import type { CodeBlockState } from './CodeBlock.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
    ...shorthands.borderRadius('.5rem'),
    height: '100%',
    width: '100%',
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: tokens.syntaxBg,
  },
  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  // TODO add additional classes for different states and/or slots
});

const useInlineHiglightStyles = makeStyles({
  root: {
    '& *': {
      color: tokens.foreground1,
    },

    '& code': {
      backgroundImage: 'none',
      ...shorthands.padding('2px'),
    },

    position: 'relative',
    ...shorthands.borderRadius('.25rem'),
    paddingLeft: '.25rem',
    paddingRight: '.25rem',
    paddingTop: '1.5px',
    paddingBottom: '1.5px',
    borderBottomWidth: '2px',
  },
  bgBlue: {
    backgroundColor: tokens.foreground3,
    ...shorthands.borderColor(tokens.foreground3),
  },

  bgYellow: {
    backgroundColor: tokens.foreground8,
    ...shorthands.borderColor(tokens.foreground8),
  },

  bgGreen: {
    backgroundColor: tokens.foreground4,
    ...shorthands.borderColor(tokens.foreground4),
  },

  bgPurple: {
    backgroundColor: tokens.foreground7,
    ...shorthands.borderColor(tokens.foreground7),
  },
});

/**
 * Apply styling to the CodeBlock slots based on the state
 */
export const useCodeBlockStyles = (state: CodeBlockState): CodeBlockState => {
  const styles = useStyles();
  const inlineHiglightStyles = useInlineHiglightStyles();

  state.rootClasses = mergeClasses(styles.root, !state.noMargin && styles['my-8']);

  state.inlineHiglightClasses = mergeClasses(inlineHiglightStyles.root);
  state.bgBlue = inlineHiglightStyles.bgBlue;
  state.bgGreen = inlineHiglightStyles.bgGreen;
  state.bgPurple = inlineHiglightStyles.bgPurple;
  state.bgYellow = inlineHiglightStyles.bgYellow;

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
