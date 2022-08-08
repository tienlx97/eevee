import { EmState } from './Em.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@eevee/react-theme';

// import "index.css"

export const emClassname = {
  root: 'eve-Em',
};

const useRootStyles = makeStyles({
  root: {
    fontFamily: tokens.fontFamilySpicy,
    letterSpacing: '-0.25px',
    // fontStyle: 'normal',
    fontWeight: tokens.fontWeightRegular,
    color: 'inherit', // <- inject color
  },
});

export const useEmStyles = (state: EmState): EmState => {
  const { type } = state;
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(emClassname.root, type === 'default' && rootStyles.root, state.root.className);

  return state;
};
