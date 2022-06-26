import { StrikeState } from './Strike.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

// import "index.css"

export const strikeClassname = {
  root: 'eve-Strike',
};

const useRootStyles = makeStyles({
  root: {
    display: 'inline-block',
    position: 'relative',
    textDecorationLine: 'none',

    '::after': {
      content: '""',
      width: '100%',
      height: '3px',
      backgroundColor: tokens.f7,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.75,
      transform: 'rotate(-5deg)',
      transformOrigin: 'center center',
      ...shorthands.margin('auto'),
      ...shorthands.borderRadius('10px'),
    },
  },
});

export const useStrikeStyles = (state: StrikeState): StrikeState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(strikeClassname.root, rootStyles.root, state.root.className);

  return state;
};
