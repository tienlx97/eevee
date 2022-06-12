import { InlineCodeState } from './InlineCode.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

export const inlineCodeClassname = {
  root: 'eve-InlineCode',
};

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline',
    fontFamily: tokens.fontFamilyMono,
    fontSize: '0.9em',
    letterSpacing: '-0.5px',
    ...shorthands.padding('4.5px', '6px'),
    ...shorthands.margin('1px', '-1px'),
    ...shorthands.borderRadius('3px'),
    backgroundColor: 'hsl(217deg 10% 50% / 0.17)',
    WebkitBoxDecorationBreak: 'clone',
    boxDecorationBreak: 'clone',
  },
});

export const useInlineCodeStyles = (state: InlineCodeState): InlineCodeState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(inlineCodeClassname.root, rootStyles.root, state.root.className);

  return state;
};
