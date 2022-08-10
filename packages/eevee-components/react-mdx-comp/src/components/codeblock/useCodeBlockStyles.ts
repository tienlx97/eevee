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
    '--tw-ring-offset-shadow': '0 0 #0000',
    '--tw-ring-shadow': '0 0 #0000',
    '--tw-shadow': '0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)',
    boxShadow: 'var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)',
  },
  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the CodeBlock slots based on the state
 */
export const useCodeBlockStyles = (state: CodeBlockState): CodeBlockState => {
  const styles = useStyles();
  // const inlineHiglightStyles = useInlineHiglightStyles();

  state.rootClasses = mergeClasses(styles.root, !state.noMargin && styles['my-8']);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
