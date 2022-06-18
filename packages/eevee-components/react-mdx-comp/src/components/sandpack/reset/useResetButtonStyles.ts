import { ResetButtonState } from './ResetButton.types';
import { makeStyles, mergeClasses } from '@griffel/react';

export const resetButtonClassname = {
  root: 'eve-ResetButton',
};

const useIconStyles = makeStyles({
  root: {
    position: 'relative',
    top: '0.125rem',
    marginRight: '0.25rem',
    marginLeft: '0.25rem',
    marginBottom: '.125rem',
    display: 'inline',
  },
});

// const useRootStyles = makeStyles({
//   root: {
//   }
// })

export const useResetButtonStyles = (state: ResetButtonState): ResetButtonState => {
  // const rootStyles = useRootStyles()
  const iconStyles = useIconStyles();

  state.root.className = mergeClasses(resetButtonClassname.root, resetButtonClassname.root, state.root.className);
  state.iconClasses = iconStyles.root;

  return state;
};
