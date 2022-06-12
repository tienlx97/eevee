import { BlockquoteState } from './Blockquote.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { breakPoints, tokens } from '@eevee/react-theme';

export const blockquoteClassname = {
  root: 'eve-Blockquote',
};

const useRootStyles = makeStyles({
  root: {
    fontStyle: 'italic',
    color: tokens.foreground2,
    ...shorthands.padding('0', '32px'),
    marginTop: '24px',
    marginBottom: '24px',

    [`@media  ${breakPoints.smAndSmaller}`]: {
      // <= 728
      ...shorthands.padding('0', '2rem'),
    },

    [`@media  ${breakPoints.xs}`]: {
      // <=  552
      ...shorthands.padding('0', '1rem'),
    },
  },

  better: {
    fontStyle: 'italic',
    fontSize: '1.25rem',
    fontFamily: tokens.fontFamily,
    fontWeight: tokens.fontWeightMedium,
    color: tokens.foreground10,
    marginTop: '1.5rem',
    marginBottom: '1.5rem',

    ...shorthands.padding('0px', '32px'),
    [`@media  ${breakPoints.smAndSmaller}`]: {
      // <= 728
      ...shorthands.padding('0', '2rem'),
    },

    [`@media  ${breakPoints.xs}`]: {
      // <=  552
      ...shorthands.padding('0', '1rem'),
    },
  },
});

export const useBlockquoteStyles = (state: BlockquoteState): BlockquoteState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(
    blockquoteClassname.root,
    // rootStyles.root,
    rootStyles.better,
    state.root.className,
  );

  return state;
};
