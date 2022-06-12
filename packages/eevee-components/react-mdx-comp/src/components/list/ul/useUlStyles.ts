import { UlState } from './Ul.types';
import { makeStyles, mergeClasses } from '@griffel/react';
import { breakPoints } from '@eevee/react-theme';

// import "./index.css"

export const UlClassname = {
  root: 'eve-Ul',
};

const useRootStyles = makeStyles({
  root: {
    fontSize: 'calc(19/16*1rem)',
    marginBottom: '32px',
    listStyleType: 'none',

    [`@media ${breakPoints.xsAndSmaller}`]: {
      fontSize: 'calc(18 / 16 * 1rem)',
      marginBottom: '1.5rem',
    },
  },
});

export const useUlStyles = (state: UlState): UlState => {
  const rootStyles = useRootStyles();

  state.root.className = mergeClasses(UlClassname.root, rootStyles.root, state.root.className);

  return state;
};
